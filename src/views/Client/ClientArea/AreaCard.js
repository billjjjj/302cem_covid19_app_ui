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
  Box,
} from '@material-ui/core';

dayjs.locale('zh-hk');

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  mb3: {
    marginBottom: '10px',
  },
});

function getHKDate(date) {
  if (date === null) {
    return '--';
  }
  return dayjs(date).format('YYYY-MM-DD');
}

const RuleCard = (props) => {
  const classes = useStyles();
  const { information } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        titleTypographyProps={{ variant: 'h6' }}
        style={{ backgroundColor: '#FF6F00', color: 'white' }}
        title={`${information.buildingName}`}
      />
      <Divider />
      <CardContent>
        <Grid container spacing={2} className={classes.mb3}>
          <Grid item xs={6}>
            <Typography variant="caption">District</Typography>
            <Typography variant="body2" component="div">
              <Box fontWeight="fontWeightMedium" display="inline">
                {information.district}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption">Last Date</Typography>
            <Typography variant="body2" component="div">
              <Box fontWeight="fontWeightMedium" display="inline">
                {getHKDate(information.lastDate)}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RuleCard;
