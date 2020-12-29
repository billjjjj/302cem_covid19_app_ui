import React from 'react';
import {
  Grid,
  makeStyles,
  TextField,
  Card,
  FormControl,
  InputLabel,
  Select,
} from '@material-ui/core';
import dayjs from 'dayjs';

dayjs.locale('zh-hk');
const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: '15px',
  },
}));

const HighRiskAreaInfo = (props) => {
  const classes = useStyles();
  const { states, handleOnChange } = props;

  return (
    <Card className={classes.content}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Case No."
            size="small"
            value={states.caseNo}
            onChange={handleOnChange('caseNo')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Last Date"
            size="small"
            fullWidth
            type="date"
            value={dayjs(states.lastDate).format('YYYY-MM-DD')}
            onChange={handleOnChange('lastDate')}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor="district">District</InputLabel>
            <Select
              native
              value={states.district}
              onChange={handleOnChange('district')}
              inputProps={{
                name: 'district',
                id: 'district',
              }}
            >
              <option value="Central and West">Central and West District</option>
              <option value="Eastern">Eastern District</option>
              <option value="Southern">Southern District</option>
              <option value="Wan Chai">Wan Chai District</option>
              <option value="Kowloon City">Kowloon City District</option>
              <option value="Kwun Tong">Kwun Tong District</option>
              <option value="Sham Shui Po">Sham Shui Po District</option>
              <option value="Wong Tai Sin">Wong Tai Sin District</option>
              <option value="Yau Tsim Mong">Yau Tsim Mong District</option>
              <option value="Island">Island District</option>
              <option value="Kwai Tsing">Kwai Tsing District</option>
              <option value="North">North District</option>
              <option value="Sai Kung">Sai Kung District</option>
              <option value="Sha Tin">Sha Tin District</option>
              <option value="Tai Po">Tai Po District</option>
              <option value="Tsuen Wan">Tsuen Wan District</option>
              <option value="Tuen Mun">Tuen Mun District</option>
              <option value="Yuen Long">Yuen Long District</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Building Name"
            size="small"
            fullWidth
            value={states.buildingName}
            onChange={handleOnChange('buildingName')}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default HighRiskAreaInfo;
