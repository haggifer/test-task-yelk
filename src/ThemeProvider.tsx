import React, { ReactElement, useEffect, useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { StyledEngineProvider, Theme } from '@mui/material/styles';
import { getTheme } from './utils/configs/themeConfig';
import { WithChildren } from './typescript/common';

export default function CustomThemeProvider({
  children,
}: WithChildren<unknown>): ReactElement {
  const theme = useMemo<Theme>(() => getTheme(), []);

  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--primary-color', theme.palette.primary.main);
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
    </ThemeProvider>
  );
}
