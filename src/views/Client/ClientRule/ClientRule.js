import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
// hook
import { useFetch } from '../../../hooks';
// component
import RuleCard from './RuleCard';

const ClientRule = () => {
  const { data, isLoading } = useFetch('/rules');

  const ruleList = data.map((information) => (
    <Grid key={information._id} item xs={12} sm={6} md={4} lg={3}>
      <RuleCard information={information} />
    </Grid>
  ));

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {ruleList}
        </Grid>
      )}
    </div>
  );
};

export default ClientRule;
