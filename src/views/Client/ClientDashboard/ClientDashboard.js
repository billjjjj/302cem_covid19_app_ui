import React from 'react';
import { Grid } from '@material-ui/core';

import { CasesCount, ResidentChart } from './components';

const ClientDashboard = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CasesCount />
        </Grid>
        <Grid item xs={12}>
          {/* <ConfirmedChart /> */}
        </Grid>
        <Grid item xs={6}>
          {/* <GenderChart /> */}
        </Grid>
        <Grid item xs={6}>
          <ResidentChart />
        </Grid>
      </Grid>
    </div>
  );
};

export default ClientDashboard;
