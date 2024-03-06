import { TextField, Typography } from '@mui/material';
import React, { ReactElement, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectAirports } from '../../../redux/selectors/airports';
import classes from './Airports.module.scss';
import { getAirportList } from '../../../redux/features/airports/airportsThunks';
import { useFormik } from "formik";
import CustomProgress from "../../../components/common/CustomProgress/CustomProgress";
import { useDebounceValue } from "usehooks-ts";

interface Film {
  title: string,
  year: number,
}

const topFilms: Film[] = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];

interface IFormValues {
  search: string;
}

export default function Airports(): ReactElement {
  const dispatch = useAppDispatch();

  const airports = useAppSelector(selectAirports);

  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<Film[]>([])

  const [initValues] = useState<IFormValues>({
    search: '',
  })

  const [minSearchLength] = useState<number>(3);

  const { values, handleChange } = useFormik({
    validationSchema: null,
    onSubmit: () => {
    },
    initialValues: initValues,
    enableReinitialize: true,
  });

  const [debouncedSearchValue] = useDebounceValue(values.search, 500)

  useEffect(() => {
    dispatch(getAirportList());
  }, []);

  useEffect(() => {
    console.log('search')
    console.log(debouncedSearchValue)
    setLoading(true);

    (async () => {
      return new Promise<void>((resolve) => {
        setTimeout(resolve, 1000)
      })
    })()

    setLoading(false)
  }, [debouncedSearchValue]);

  return (
    <>
      <Typography variant="h2" component="h1" className={classes.page_title}>
        Airports
      </Typography>

      <TextField
        value={values.search}
        onChange={handleChange}
        label="Search an airport"
        placeholder="Write an airport name or its part..."
        InputProps={{
          endAdornment: (
            <React.Fragment>
              {loading ? <CustomProgress type="button"/> : null}
            </React.Fragment>
          ),
        }}
      />
    </>
  );
}
