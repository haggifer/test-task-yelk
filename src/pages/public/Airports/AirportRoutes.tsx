import React, { ReactElement, useMemo } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectAirports } from '../../../redux/selectors/airports';
import { Box, Typography } from '@mui/material';
import classes from './Airports.module.scss';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { IRoute } from '../../../typescript/entities';
import moment from 'moment';

export default function AirportRoutes(): ReactElement {
  const airports = useAppSelector(selectAirports);

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'flightCode',
        headerName: 'Code',
        flex: 1,
        wrap: true,
      },
      {
        field: 'flightName',
        headerName: 'Name',
        flex: 1.5,
        wrap: true,
      },
      {
        field: 'stops',
        headerName: 'Stops',
        flex: 1,
        wrap: true,
      },
      {
        field: 'cabinType',
        headerName: 'Cabin Type',
        flex: 1.5,
        wrap: true,
      },
      {
        field: 'departureTime',
        headerName: 'Departure Time',
        valueGetter: (params: GridValueGetterParams) =>
          moment(params.row.departureAirport.time).format('MM.DD, HH:mm'),
        flex: 1.5,
        wrap: true,
      },
      {
        field: 'arrivalTime',
        headerName: 'Arrival Time',
        valueGetter: (params: GridValueGetterParams) =>
          moment(params.row.arrivalAirport.time).format('MM.DD, HH:mm'),
        flex: 1.5,
        wrap: true,
      },
      {
        field: 'arrivalAirport',
        headerName: 'Arrival Airport',
        valueGetter: (params: GridValueGetterParams) =>
          params.row.arrivalAirport.label,
        flex: 2.5,
        wrap: true,
      },
    ],
    [airports.routes],
  );

  return !airports.routes?.length ? (
    <Typography variant="h6" sx={{ textAlign: 'center' }}>
      Nothing found
    </Typography>
  ) : (
    <Box className={classes.routes_table}>
      <DataGrid
        rows={airports.routes as IRoute[]}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        sx={{
          fontSize: '1rem',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      />
    </Box>
  );
}
