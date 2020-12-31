import React from 'react';
import dayjs from 'dayjs';
import {
  Grid,
  makeStyles,
  CardHeader,
  Card,
  CardContent,
  Typography,
  Divider,
  Chip,
} from '@material-ui/core';

dayjs.locale('zh-hk');
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  mb3: {
    marginBottom: '10px',
  },
});

function getGender(gender) {
  return gender === 'M' ? 'Male' : 'Female';
}

function getHKDate(date) {
  return dayjs(date).format('YYYY-MM-DD');
}

function getConfirmed(state) {
  return state === true ? '✅' : '--';
}

function getStatusColor(status) {
  switch (status) {
    case 'Hospitalised':
      return '#FF6F00';
    case 'Pending admission':
      return '#F99F02';
    case 'Deceased':
      return '#616161';
    case 'Discharged':
      return '#368E3B';
    default:
      return '#ededed';
  }
}

const CaseCard2 = (props) => {
  const classes = useStyles();
  const { information } = props;
  return (
    <Card className={classes.root}>
      <CardHeader
        titleTypographyProps={{ variant: 'h6' }}
        style={{ backgroundColor: getStatusColor(information.status) }}
        title={`# ${information.caseNo}`}
        avatar={<Chip label={information.status} style={{ backgroundColor: 'white' }} />}
      />
      <Divider />
      <CardContent>
        <Grid container spacing={2} className={classes.mb3}>
          <Grid item xs={6}>
            <Typography variant="h6">
              Age {information.age} {getGender(information.gender)}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Chip label={information.classification} color="secondary" style={{ color: 'white' }} />
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.mb3}>
          <Grid item xs={6}>
            <Typography variant="caption">Date of onset</Typography>
            <Typography variant="body2">{getHKDate(information.dateOfOnset)}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">Report Date</Typography>
            <Typography variant="body2">{getHKDate(information.reportDate)}</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.mb3}>
          <Grid item xs={6}>
            <Typography variant="caption">Resident</Typography>
            <Typography variant="body2">{information.resident}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">Confirmed</Typography>
            <Typography variant="body2">{getConfirmed(information.confirmed)}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default CaseCard2;
