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

    const routes = db.collection('routes');

    const airport_id = req.query.airport_id as string;

    if (!airport_id) {
      return new Error('airport_id is not defined');
    }

    const filter = {
      'departureAirport.id': parseInt(airport_id),
    };

    const limit = req.query._limit ? parseInt(req.query._limit as string) : 0;

    const filteredRoutes = routes.find(filter).limit(limit);

    const filteredRoutesArray = await filteredRoutes.toArray();

    res.status(200).json(filteredRoutesArray);

    await client.close();
  } catch (error) {
    console.error('Error connecting to the database or querying data:', error);
    res.status(500).send('Internal Server Error');
  }
};