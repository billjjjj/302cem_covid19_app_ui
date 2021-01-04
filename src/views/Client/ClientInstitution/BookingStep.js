import React from 'react';
import { Grid, Button } from '@material-ui/core';

import img1 from './img1.png';
import img2 from './img2.png';

const BookingStep = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
      </Grid>
      <Grid item xs={6}>
        <img src={img2} alt="img2" style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          target="_blank"
          href="https://booking.communitytest.gov.hk/form/index.jsp"
        >
          Community Testing Centre - Booking System
        </Button>
      </Grid>
    </Grid>
  );
};

export default BookingStep;
