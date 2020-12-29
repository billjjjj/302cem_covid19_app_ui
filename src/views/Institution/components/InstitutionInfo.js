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

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: '15px',
  },
}));

const InstitutionInfo = (props) => {
  const classes = useStyles();
  const { states, handleOnChange } = props;

  return (
    <Card className={classes.content}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor="region">Region</InputLabel>
            <Select
              native
              value={states.region}
              onChange={handleOnChange('region')}
              inputProps={{
                name: 'region',
                id: 'region',
              }}
            >
              <option value="Hong Kong Island">Hong Kong Island</option>
              <option value="Kowloon">Kowloon</option>
              <option value="New Territories">New Territories</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Clinic"
            size="small"
            fullWidth
            value={states.clinic}
            onChange={handleOnChange('clinic')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            size="small"
            fullWidth
            value={states.address}
            onChange={handleOnChange('address')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone"
            size="small"
            value={states.phone}
            type="tel"
            onChange={handleOnChange('phone')}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default InstitutionInfo;
