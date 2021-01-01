import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Card, CardHeader, CardContent, IconButton, Divider, Typography } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  chartContainer: {
    position: 'relative',
    height: '300px',
  },
  stats: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
  device: {
    textAlign: 'center',
    padding: theme.spacing(1),
  },
  deviceIcon: {
    color: theme.palette.icon,
  },
}));
const GenderChart = () => {
  const classes = useStyles();
  const theme = useTheme();
  const data = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.error.main,
          theme.palette.warning.main,
        ],
        borderWidth: 8,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white,
      },
    ],
    labels: ['Age 1 - 30', 'Age 31 - 50', 'Age > 50'],
  };

  const options = {
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      borderWidth: 1,
      borderColor: theme.palette.divider,
      backgroundColor: 'white',
      titleFontColor: theme.palette.text.primary,
      bodyFontColor: theme.palette.text.secondary,
      footerFontColor: theme.palette.text.secondary,
    },
  };

  const customers = [
    {
      title: 'Age 1 - 30',
      value: 1,
      icon: <AccountCircleIcon />,
      color: theme.palette.primary.main,
    },
    {
      title: 'Age 31 - 50',
      value: 2,
      icon: <AccountCircleIcon />,
      color: theme.palette.error.main,
    },
    {
      title: 'Age > 50',
      value: 3,
      icon: <AccountCircleIcon />,
      color: theme.palette.warning.main,
    },
  ];

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton size="small" onClick={null}>
            <RefreshIcon />
          </IconButton>
        }
        title="Customer Profiling"
      />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          <Doughnut data={data} options={options} />
        </div>
        <div className={classes.stats}>
          {customers.map((device) => (
            <div className={classes.device} key={device.title}>
              <span className={classes.deviceIcon}>{device.icon}</span>
              <Typography variant="body1">{device.title}</Typography>
              <Typography style={{ color: device.color }} variant="h6">
                {device.value}%
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GenderChart;
