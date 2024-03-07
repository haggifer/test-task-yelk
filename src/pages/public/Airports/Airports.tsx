import { Box, TextField, Typography } from '@mui/material';
import React, { ReactElement, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectAirports } from '../../../redux/selectors/airports';
import classes from './Airports.module.scss';
import { useFormik } from "formik";
import CustomProgress from "../../../components/common/CustomProgress/CustomProgress";
import { useDebounceValue } from "usehooks-ts";
import { getAirportList } from "../../../redux/features/airports/airportsThunks";
import AirportCard from "./AirportCard";
import { Link, useLocation } from "react-router-dom";

interface IFormValues {
  search: string;
}

export default function Airports(): ReactElement {
  const dispatch = useAppDispatch();

  const location = useLocation()

  const airports = useAppSelector(selectAirports);
  console.log(airports)

  const [initValues, setInitValues] = useState<IFormValues>({
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
    const searchValue = debouncedSearchValue.length < minSearchLength ?
      '' :
      debouncedSearchValue

    const promise = dispatch(getAirportList({
      search: searchValue,
    }));

    return () => {
      promise.abort()
    }
  }, [debouncedSearchValue]);

  useEffect(() => {
    const initSearchParams = new URLSearchParams(location.search)

    const search = initSearchParams.get('search')

    if (search === initValues.search) return

    setInitValues({
      ...initValues,
      search: search || '',
    })
  }, [location.search]);

  useEffect(() => {
    // console.log(airportsStaticData)
    // console.log(generateRoutes())
    // console.log(JSON.stringify(airportsStaticData))
    // console.log(JSON.stringify(generateRoutes()))
  }, []);

  return (
    <>
      <Box
        component={Link}
        to="/"
        sx={{
          textDecoration: 'none',
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          className={classes.page_title}
        >
          Airports
        </Typography>
      </Box>

      <TextField
        name="search"
        value={values.search}
        onChange={handleChange}
        className={classes.search}
        label="Search an airport"
        placeholder="Write an airport name or its part..."
        disabled={!!airports.loading}
      />

      {
        !airports.data && airports.loading ?
          <CustomProgress type="page"/> :
          !airports.data ?
            <Typography variant="h6">Nothing found</Typography> :
            <Box
              className={classes.cards}
            >
              {
                airports.data?.map(item => (
                  <AirportCard
                    item={item}
                    key={item.id}
                  />
                ))
              }
            </Box>
      }
    </>
  );
}
