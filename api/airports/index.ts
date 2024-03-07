import { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.REACT_APP_MONGODB_URI;

export default async (req: VercelRequest, res: VercelResponse) => {
  if (!MONGODB_URI) {
    throw new Error('REACT_APP_MONGODB_URI env variable is not defined');
  }

  try {
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db();

    const airports = db.collection('airports');

    const searchValue = req.query.search as string | undefined;

    const searchFilter =
      searchValue && searchValue.trim() !== ''
        ? {
            $or: [
              { fullName: { $regex: searchValue, $options: 'i' } },
              { shortName: { $regex: searchValue, $options: 'i' } },
              { icao: { $regex: searchValue, $options: 'i' } },
              { iata: { $regex: searchValue, $options: 'i' } },
              { municipalityName: { $regex: searchValue, $options: 'i' } },
            ],
          }
        : {};

    const limit = req.query._limit
      ? parseInt(req.query._limit as string, 10)
      : 0;

    const filteredAirports = airports.find(searchFilter).limit(limit);

    const filteredAirportsArray = await filteredAirports.toArray();

    res.status(200).json(filteredAirportsArray);

    await client.close();
  } catch (error) {
    console.error('Error connecting to the database or querying data:', error);
    res.status(500).send('Internal Server Error');
  }
};
