import React from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Divider, CircularProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend: { display: false },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          min: 0,
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
        },
      },
    ],
  },
};

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
  },
  chartContainer: {
    height: 400,
    position: 'relative',
  },
  actions: {
    justifyContent: 'flex-end',
  },
}));

const ResidentChart = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [isLoading, setIsLoading] = React.useState(false);
  const [count, setCount] = React.useState({
    hk: 0,
    nonHK: 0,
  });

  const getMaleCount = async () => {
    setIsLoading(true);
    try {
      const resHK = await axios.get(
        'https://api.data.gov.hk/v2/filter?q=%7B%22resource%22%3A%22http%3A%2F%2Fwww.chp.gov.hk%2Ffiles%2Fmisc%2Fenhanced_sur_covid_19_eng.csv%22%2C%22section%22%3A1%2C%22format%22%3A%22json%22%2C%22filters%22%3A%5B%5B8%2C%22eq%22%2C%5B%22HK%20resident%22%5D%5D%5D%7D'
      );

      const resNonHK = await axios.get(
        'https://api.data.gov.hk/v2/filter?q=%7B%22resource%22%3A%22http%3A%2F%2Fwww.chp.gov.hk%2Ffiles%2Fmisc%2Fenhanced_sur_covid_19_eng.csv%22%2C%22section%22%3A1%2C%22format%22%3A%22json%22%2C%22filters%22%3A%5B%5B8%2C%22eq%22%2C%5B%22Non-HK%20resident%22%5D%5D%5D%7D'
      );

      const hkCount = resHK.data.length;
      const nonHKCount = resNonHK.data.length;

      setCount({
        hk: hkCount,
        nonHK: nonHKCount,
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
    labels: ['HK', 'Non-HK'],
    datasets: [
      {
        label: 'Count',
        backgroundColor: theme.palette.primary.dark,
        data: [count.hk, count.nonHK],
      },
    ],
  };

  return (
    <Card className={classes.root}>
      <CardHeader title="Case Highlights(By Resident)" />
      <Divider />
      <CardContent>
        <div className={classes.chartContainer}>
          {isLoading ? <CircularProgress /> : <Bar data={data} options={options} />}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResidentChart;
