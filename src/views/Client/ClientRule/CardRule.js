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
  const { data } = useFetch('/rules');
  return data.map((information) => (
    <Grid item xs={12} sm={6} md={12}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Rule Name: {information.ruleName}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            Start Date: {information.startDate}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            End Date: {information.endDate}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            Description: {information.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ));
};
export default CardRule;
