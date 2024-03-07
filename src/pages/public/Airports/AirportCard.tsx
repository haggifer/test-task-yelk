import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { ReactElement, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { IAirport, IRoute } from "../../../typescript/entities";
import classes from './AirportCard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";
import AirportRoutes from "./AirportRoutes";
import { selectAirports } from "../../../redux/selectors/airports";
import { clearRoutes, setActiveAirport } from "../../../redux/features/airports/airportsSlice";
import { getAirportRouteList } from "../../../redux/features/airports/airportsThunks";
import CustomProgress from "../../../components/common/CustomProgress/CustomProgress";
import { PayloadAction } from "@reduxjs/toolkit";
import { IRouteListParams } from "../../../typescript/requests";

interface IProps {
  item: IAirport;
}

export default function AirportCard({ item }: IProps): ReactElement {
  const dispatch = useAppDispatch()

  const airports = useAppSelector(selectAirports)

  const [currentRouteRequest, setCurrentRouteRequest] = useState<any>(null)

  const [loadingRoutes, setLoadingRoutes] = useState<boolean>(false)
  // console.log(item.id)
  // console.log(loadingRoutes)

  const onCardHeaderClick = () => {
    dispatch(clearRoutes())

    dispatch(setActiveAirport(airports.activeAirport === item.id ? null : item.id))
  }

  const fetchRoutes = async () => {
    setLoadingRoutes(true)

    const request = dispatch(getAirportRouteList({
      airport_id: item.id,
    }))

    setCurrentRouteRequest(request)

    request.then(() => {
      setLoadingRoutes(false)
    })
  }

  useEffect(() => {
    if (currentRouteRequest) {
      currentRouteRequest.abort()

      setCurrentRouteRequest(null)
    }

    if (airports.activeAirport === item.id && !airports.routes) {
      fetchRoutes()
    }
  }, [airports.activeAirport]);

  return (
    <Card className={classes.card}>
      <Box
        className={classes.card_header}
        onClick={onCardHeaderClick}
      >
        <CardMedia
          component="img"
          height="200"
          image={item.image}
          alt="Airport Image"
          className={classes.card_media}
        />
        <Box className={classes.card_header_content}>
          <Box className={classes.card_header_text}>
            <Typography variant="h6" className={classes.title}>{item.fullName}</Typography>
            <Typography variant="subtitle1">
              Location: {' '}
              <Typography
                sx={{
                  display: 'inline-block',
                  fontWeight: 500,
                }}
              >{`${item.municipalityName}, ${item.country.name}`}</Typography>
            </Typography>
            <Typography variant="subtitle1">
              ICAO: {' '}
              <Typography
                sx={{
                  display: 'inline-block',
                  fontWeight: 500,
                }}
              >{`${item.icao}`}</Typography>
            </Typography>
          </Box>
          <Box className={classes.helper}>
            {
              airports.activeAirport === item.id && loadingRoutes ?
                <CustomProgress
                  type="button"
                  progressProps={{
                    size: '1.2rem',
                  }}
                /> :
                <Box className={classes.action_hint}>
                  <FontAwesomeIcon
                    icon={faHandPointer}
                    className={classes.action_hint_icon}
                  />
                  <Typography
                    variant="subtitle1"
                    className={classes.action_hint_text}
                  >Press to {airports.routes ? 'hide' : 'view'} routes</Typography>
                </Box>
            }
          </Box>
        </Box>
      </Box>

      {
        airports.routes &&
        airports.activeAirport === item.id &&
        !loadingRoutes &&
        <CardContent className={classes.card_content}>
          <AirportRoutes/>
        </CardContent>
      }
    </Card>
  );
}
