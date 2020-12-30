import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
// hook
import { useFetch } from '../../../hooks';
// component
import RuleCard from './CardRule';

const ClientRule = () => {
  const { isLoading } = useFetch('/rules');

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={4}>
          <RuleCard />
        </Grid>
      )}
    </div>
  );
};

export default ClientRule;
