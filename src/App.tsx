import React, { ReactElement, useEffect, useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { StyledEngineProvider, Theme } from '@mui/material/styles';
import { getTheme } from 'utils/configs/themeConfig';
import './assets/scss/index.scss';
import { Outlet } from 'react-router';
import { useLocation, useNavigate } from 'react-router-dom';
import { defaultPublicPath } from './routing/router';
import classes from 'App.module.scss';
import { PageContainer } from './components/layout/PageContainer/PageContainer';

export default function App(): ReactElement {
  const theme = useMemo<Theme>(() => getTheme(), []);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(defaultPublicPath);
    }
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <StyledEngineProvider injectFirst>
        <>
          <main className={classes.content_wrapper}>
            <PageContainer>
              <Outlet />
            </PageContainer>
          </main>
        </>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
