import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// hooks
import { useFetch } from '../../../hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));
const CardRule = () => {
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
  const classes = useStyles();

  return districtList.map((district) => (
    <Grid item xs={12} sm={6} md={12}>
      <Typography variant="h6" className={classes.title}>
        Region: {district}
      </Typography>
      <Divider />
      <div className={classes.demo}>
        <List>
          <ListItem>
            {data.map(
              (information) =>
                district === information.district && (
                  <ListItemText>
                    <Card className={classes.content}>
                      <Grid container spacing={2}>
                        <Grid item xs={4}>
                          Last Date: {information.lastDate}
                        </Grid>
                        <Grid item xs={4}>
                          Build Name: {information.buildName}
                        </Grid>
                        <Grid item xs={4}>
                          Case No:{information.caseNo}
                        </Grid>
                      </Grid>
                    </Card>
                  </ListItemText>
                )
            )}
          </ListItem>
        </List>
      </div>
      <Divider />
    </Grid>
  ));
};
export default CardRule;
