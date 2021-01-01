import React from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import { makeStyles, useTheme } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography,
  CircularProgress,
} from '@material-ui/core';
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

function getGenderPercent(maleCount, femaleCount) {
  const totalCount = maleCount + femaleCount;
  const malePercent = ((maleCount / totalCount) * 100).toFixed(2);
  const femalePercent = ((femaleCount / totalCount) * 100).toFixed(2);

  return { malePercent, femalePercent };
}

const GenderChart = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [isLoading, setIsLoading] = React.useState(false);
  const [count, setCount] = React.useState({
    male: 0,
    female: 0,
    malePercent: 0,
    femalePercent: 0,
  });

  const getMaleCount = async () => {
    setIsLoading(true);
    try {
      const resMale = await axios.get(
        'https://api.data.gov.hk/v2/filter?q=%7B%22resource%22%3A%22http%3A%2F%2Fwww.chp.gov.hk%2Ffiles%2Fmisc%2Fenhanced_sur_covid_19_eng.csv%22%2C%22section%22%3A1%2C%22format%22%3A%22json%22%2C%22filters%22%3A%5B%5B4%2C%22eq%22%2C%5B%22M%22%5D%5D%5D%7D'
      );

      const resFemale = await axios.get(
        'https://api.data.gov.hk/v2/filter?q=%7B%22resource%22%3A%22http%3A%2F%2Fwww.chp.gov.hk%2Ffiles%2Fmisc%2Fenhanced_sur_covid_19_eng.csv%22%2C%22section%22%3A1%2C%22format%22%3A%22json%22%2C%22filters%22%3A%5B%5B4%2C%22eq%22%2C%5B%22F%22%5D%5D%5D%7D'
      );

      const maleCount = resMale.data.length;
      const femaleCount = resFemale.data.length;
      const { malePercent, femalePercent } = getGenderPercent(maleCount, femaleCount);

      setCount({
        male: maleCount,
        female: femaleCount,
        malePercent,
        femalePercent,
      });
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getMaleCount();
  }, []);

  const data = {
    datasets: [
      {
        data: [count.male, count.female],
        backgroundColor: [theme.palette.primary.main, theme.palette.warning.main],
        borderWidth: 8,
        borderColor: theme.palette.white,
        hoverBorderColor: theme.palette.white,
      },
    ],
    labels: ['Male', 'Female'],
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
      title: 'Male',
      value: count.malePercent,
      icon: <AccountCircleIcon />,
      color: theme.palette.primary.main,
    },
    {
      title: 'Female',
      value: count.femalePercent,
      icon: <AccountCircleIcon />,
      color: theme.palette.warning.main,
    },
  ];

  return (
    <Card className={classes.root}>
      <CardHeader title="Case Highlights(By Gender)" />
      <Divider />

      <CardContent>
        <div className={classes.chartContainer}>
          {isLoading ? <CircularProgress /> : <Doughnut data={data} options={options} />}
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
