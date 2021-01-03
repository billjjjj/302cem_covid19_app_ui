import React from 'react';
import Button from '@material-ui/core/Button';
import { CircularProgress, Grid } from '@material-ui/core';
// hook
import { useFetch } from '../../../hooks';
// component
import InstitutionCard from './CardInstitution';
// img
import img1 from './img1.png';
import img2 from './img2.png';

const ClientInstitution = () => {
  const { isLoading } = useFetch('/institutions');

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container alignItems="center" justify="center" spacing={1}>
          <Grid item xs={5}>
            <img src={img1} alt="img1" width="450" />
          </Grid>
          <Grid item xs={5}>
            <img src={img2} alt="img2" width="450" />
          </Grid>
          <Grid item xs={4}>
            <Button
              target="_blank"
              href="https://booking.communitytest.gov.hk/form/index.jsp"
              variant="outlined"
              color="secondary"
              width="600"
            >
              Community Testing Centre - Booking System
            </Button>
          </Grid>
          <InstitutionCard />
        </Grid>
      )}
    </div>
  );
};

export default ClientInstitution;
