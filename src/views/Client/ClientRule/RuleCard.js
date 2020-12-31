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
  Avatar,
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
  avatar: {
    backgroundColor: 'white',
    color: 'black',
  },
});

function getHKDate(date) {
  if (date === null) {
    return '--';
  }
  return dayjs(date).format('YYYY-MM-DD');
}

function getStatusColor(date) {
  const today = dayjs(new Date());
  const endDate = dayjs(date);
  if (endDate.isBefore(today)) {
    return '#616161';
  }
  return '#B71C1C';
}
const RuleCard = (props) => {
  const classes = useStyles();
  const { information } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        titleTypographyProps={{ variant: 'h6' }}
        style={{ backgroundColor: getStatusColor(information.endDate), color: 'white' }}
        title={`${information.ruleName}`}
        avatar={
          <Avatar alt="" src={information.imageUrl} className={classes.avatar}>
            --
          </Avatar>
        }
      />
      <Divider />
      <CardContent>
        <Grid container spacing={2} className={classes.mb3}>
          <Grid item xs={6}>
            <Typography variant="caption">Start Date</Typography>
            <Typography variant="body2">{getHKDate(information.startDate)}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">End Date</Typography>
            <Typography variant="body2">{getHKDate(information.endDate)}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider />
            <Typography variant="caption">{information.description}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RuleCard;
