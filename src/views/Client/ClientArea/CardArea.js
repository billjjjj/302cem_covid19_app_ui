import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// hooks
import { useFetch } from '../../../hooks';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CardRule = () => {
  const classes = useStyles();
  const { data } = useFetch('/areas');
  const districtList = [
    'Central and West',
    'Eastern',
    'Southern',
    'Wan Chai',
    'Kowloon City',
    'Sham Shui Po',
    'Wong Tai Sin',
    'Yau Tsim Mong',
    'Island',
    'Kwai Tsing',
    'North',
    'Sai Kung',
    'Sha Tin',
    'Tai Po',
    'Tsuen Wan',
    'Tuen Mun',
    'Yuen Long',
  ];
  const cal = districtList.map(function (n) {
    return n;
  });

  return;
  data.map((information) => (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Region: {information.district}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ));
};
export default CardRule;
