import React from 'react';
import { WithChildren } from '../../../typescript/common';
import { Box } from '@mui/material';
import { maxContentWidth } from '../../../utils/staticValues';
import classes from './PageContainer.module.scss';

export const PageContainer = ({ children }: WithChildren<object>) => {
  return (
    <Box
      className={classes.container}
      sx={{
        width: '100%',
        maxWidth: `${maxContentWidth}px`,
      }}
    >
      {children}
    </Box>
  );
};
