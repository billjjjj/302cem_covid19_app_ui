import React from 'react';
import { CircularProgress, Grid, Typography } from '@material-ui/core';
import dayjs from 'dayjs';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
// hook
import { useFetch } from '../../../hooks';
// component
import AreaCard from './AreaCard';

dayjs.locale('zh-hk');

const getDiffDays = (date) => {
  const today = dayjs(new Date());
  const lastDate = dayjs(date);
  return today.diff(lastDate, 'day');
};

const noCasesMessage = (count) => {
  return count === 0 ? (
    <Grid item xs={12}>
      No any cases in 14 days.
    </Grid>
  ) : (
    ''
  );
};

const ClientArea = () => {
  const { data, isLoading } = useFetch('/areas');

  const riskAreaList = data.map((information) => {
    if (getDiffDays(information.lastDate) <= 14) {
      return (
        <Grid key={information._id} item xs={12} sm={6} md={4}>
          <AreaCard information={information} />
        </Grid>
      );
    }
    return null;
  });

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" paragraph>
              <FontAwesomeIcon icon={faExclamationTriangle} /> High Risk Areas / Buildings (14days)
            </Typography>
            <Grid container spacing={3}>
              {riskAreaList}
              {noCasesMessage(data.length)}
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ClientArea;
