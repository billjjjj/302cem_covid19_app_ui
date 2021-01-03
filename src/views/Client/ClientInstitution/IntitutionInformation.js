import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

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

function randomColor() {
  const hex = Math.floor(Math.random() * 0xffffff);
  let color = '#';
  color += hex.toString();
  return color;
}

const IntitutionInformation = () => {
  const classes = useStyles();
  const { data } = useFetch('/institutions/group');
  return data.map((information) =>
    information.data.map((innerData) => (
      <Card className={classes.root}>
        <CardHeader
          titleTypographyProps={{ variant: 'h6' }}
          style={{ backgroundColor: randomColor(), color: 'black' }}
          title={`${innerData.clinic}`}
        />
        <CardContent>
          <Typography variant="body2">Address: {innerData.address}</Typography>
          <Divider />
          <Typography variant="body2">Phone: {innerData.phone}</Typography>
        </CardContent>
      </Card>
    ))
  );
};
export default IntitutionInformation;
