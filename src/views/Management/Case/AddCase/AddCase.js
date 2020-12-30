import React from 'react';
import { Grid } from '@material-ui/core';

// components
import { DashboardContainer, LoadingButton } from '../../../../components';
import { CaseInfo } from '../components';
// hooks
import { usePost } from '../../../../hooks';
// config
import dataModel from '../config/data';

const AddCase = () => {
  const [states, setStates] = React.useState(dataModel);
  const [res, postMethod] = usePost({ url: '/cases', payload: states });

  const handleOnChange = (name) => (e) => {
    setStates({ ...states, [name]: e.target.value });
  };

  return (
    <DashboardContainer title="Add a new case">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={8}>
          <CaseInfo states={states} handleOnChange={handleOnChange} />
        </Grid>

        <Grid item xs={12}>
          <LoadingButton
            variant="contained"
            color="primary"
            onClick={postMethod}
            isLoading={res.isLoading}
          >
            SUBMIT
          </LoadingButton>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default AddCase;
