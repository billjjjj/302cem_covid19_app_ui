import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// hooks
import { useFetch } from '../../../hooks';
// compoments
import IntitutionInformation from './IntitutionInformation';

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

const CardInstitution = () => {
  const classes = useStyles();
  const { data } = useFetch('/institutions/group');

  return data.map((information) => (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Typography variant="h5" component="h2">
        Community Testing Centre
      </Typography>
      <Card className={classes.title}>
        <CardHeader
          titleTypographyProps={{ variant: 'h5' }}
          style={{ backgroundColor: 'black', color: 'white' }}
          title={information._id}
        />

        <IntitutionInformation />
      </Card>
    </Grid>
  ));
};
export default CardInstitution;
