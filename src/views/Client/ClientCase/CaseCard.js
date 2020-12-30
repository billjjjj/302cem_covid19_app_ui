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

const CaseCard = () => {
  const classes = useStyles();
  const { data } = useFetch('/cases');
  return data.map((information) => (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h4" component="h2">
            Case No: {information.caseNo}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            Report Date: {information.reportDate}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            Date of onset: {information.dateOfOnset}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            Gender: {information.gender}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            Age: {information.age}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            Resident: {information.resident}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            Classification: {information.classification}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            Confirmed: {information.confirmed ? '✅' : '--'}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            Status: {information.status}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ));
};
export default CaseCard;
