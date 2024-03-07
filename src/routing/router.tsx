import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Airports from '../pages/public/Airports/Airports';
import React from 'react';
import NotFound from '../pages/service/NotFound/NotFound';
import App from '../App';

export const defaultPublicPath = '/airports';

export const publicRoutes: RouteObject[] = [
  // {
  //   path: '/',
  //   element: <Airports />,
  // },
  {
    path: '/airports',
    element: <Airports />,
  },
];

export const serviceRoutes: RouteObject[] = [
  {
    path: '/*',
    element: <NotFound />,
  },
];

export const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [...publicRoutes, ...serviceRoutes],
  },
]);
