import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import CaseCard from './CaseCard';

const CasesCount = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [count, setCount] = React.useState({
    lastUpdate: '',
    confirmed: 0,
    death: 0,
    discharge: 0,
    critical: 0,
  });
  const getCasesCount = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        'https://api.data.gov.hk/v2/filter?q=%7B%22resource%22%3A%22http%3A%2F%2Fwww.chp.gov.hk%2Ffiles%2Fmisc%2Flatest_situation_of_reported_cases_covid_19_eng.csv%22%2C%22section%22%3A1%2C%22format%22%3A%22json%22%2C%22sorts%22%3A%5B%5B3%2C%22desc%22%5D%5D%7D'
      );

      const countArray = Object.values(res.data[0]);
      setCount({
        lastUpdate: countArray[0],
        confirmed: countArray[2],
        death: countArray[6],
        discharge: countArray[7],
        critical: countArray[9],
      });
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getCasesCount();
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          Last update: {count.lastUpdate}
        </Grid>
        <Grid item xs={6} sm={3}>
          <CaseCard
            title="Confirmed"
            textColor="#00BCD4"
            count={count.confirmed}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CaseCard title="Death" textColor="#368E3B" count={count.death} isLoading={isLoading} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CaseCard
            title="Discharge"
            textColor="#616161"
            count={count.discharge}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CaseCard
            title="Critical"
            textColor="#FF6F00"
            count={count.critical}
            isLoading={isLoading}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CasesCount;
