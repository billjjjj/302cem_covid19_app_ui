import React from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
// hook
import { useFetch } from '../../../hooks';
// component
import InstitutionCard from './CardInstitution';

const ClientInstitution = () => {
  const { isLoading } = useFetch('/institutions');

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={4}>
          <InstitutionCard />
        </Grid>
      )}
    </div>
  );
};

export default ClientInstitution;
