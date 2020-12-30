import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
// hook
import { useFetch } from '../../../hooks';
// component
import CaseCard from './CaseCard';

const ClientCase = () => {
  const { isLoading } = useFetch('/cases');

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={4}>
          <CaseCard />
        </Grid>
      )}
    </div>
  );
};

export default ClientCase;
