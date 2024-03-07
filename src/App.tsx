import React, { ReactElement, useEffect, useMemo } from 'react';
import { Theme } from '@mui/material/styles';
import { getTheme } from 'utils/configs/themeConfig';
import './assets/scss/index.scss';
import { Outlet } from 'react-router';
import { useLocation, useNavigate } from 'react-router-dom';
import { defaultPublicPath } from './routing/router';
import classes from 'App.module.scss';
import { PageContainer } from './components/layout/PageContainer/PageContainer';
import CustomThemeProvider from "./ThemeProvider";

export default function App(): ReactElement {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(defaultPublicPath);
    }
  }, [location.pathname]);

  return (
    <CustomThemeProvider>
      <main className={classes.content_wrapper}>
        <PageContainer>
          <Outlet/>
        </PageContainer>
      </main>
    </CustomThemeProvider>
  );
}
