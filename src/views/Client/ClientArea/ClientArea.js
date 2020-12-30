import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
// hook
import { useFetch } from '../../../hooks';
// component
import AreaCard from './CardArea';

const ClientArea = () => {
  const { isLoading } = useFetch('/institutions');

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={4}>
          <AreaCard />
        </Grid>
      )}
    </div>
  );
};

export default ClientArea;
