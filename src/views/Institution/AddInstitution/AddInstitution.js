import React from 'react';
import { Grid } from '@material-ui/core';

// components
import { DashboardContainer, LoadingButton } from '../../../components';
import { InstitutionInfo } from '../components';
// hooks
import { usePost } from '../../../hooks';
// config
import dataModel from '../config/data';

const AddInstitution = () => {
  const [states, setStates] = React.useState(dataModel);
  const [res, postMethod] = usePost({ url: '/institutions', headers: {}, payload: states });

  const handleOnChange = (name) => (e) => {
    setStates({ ...states, [name]: e.target.value });
  };

  return (
    <DashboardContainer title="Add a new Institution">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={8}>
          <InstitutionInfo states={states} handleOnChange={handleOnChange} />
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

export default AddInstitution;
