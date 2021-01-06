import React from 'react';
import {
  Grid,
  CardContent,
  Typography,
  Card,
  CardHeader,
  Divider,
  makeStyles,
  useTheme,
} from '@material-ui/core';

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

const getHeaderColor = (region) => {
  const theme = useTheme();
  switch (region) {
    case 'Hong Kong Island':
      return theme.palette.primary.dark;
    case 'Kowloon':
      return theme.palette.warning.dark;
    default:
      return theme.palette.success.dark;
  }
};

const InstitutionCards = (props) => {
  const classes = useStyles();

  const { region, information } = props;

  const institutionList = information.map((data) => {
    return (
      <Grid item xs={12} md={6} key={data._id}>
        <Card className={classes.root}>
          <CardHeader
            titleTypographyProps={{ variant: 'body1' }}
            style={{ backgroundColor: getHeaderColor(region), color: 'white' }}
            title={data.clinic}
          />
          <CardContent>
            <Typography variant="body2">Address: {data.address}</Typography>
            <Divider />
            <Typography variant="body2">Phone: {data.phone}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <Grid container spacing={3}>
      {institutionList}
    </Grid>
  );
};

export default InstitutionCards;
