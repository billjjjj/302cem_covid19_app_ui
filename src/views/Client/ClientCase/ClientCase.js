import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
// hook
import { useFetch } from '../../../hooks';
// components
import CaseCard from './CaseCard';

const ClientCase = () => {
  const { data, isLoading } = useFetch('/cases');

  const caseList = data.map((information) => (
    <Grid key={information._id} item xs={12} sm={6} md={6} lg={4}>
      <CaseCard information={information} />
    </Grid>
  ));

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {caseList}
        </Grid>
      )}
    </div>
  );
};

export default ClientCase;
