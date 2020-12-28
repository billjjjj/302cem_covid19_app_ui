import React from 'react';
import {
  Grid,
  makeStyles,
  TextField,
  Card,
  Select,
  FormControl,
  InputLabel,
} from '@material-ui/core';
import dayjs from 'dayjs';

dayjs.locale('zh-hk');
const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: '15px',
  },
}));

const CaseInfo = (props) => {
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
        <Grid item xs={6}>
          <TextField
            label="Report Date"
            size="small"
            fullWidth
            type="date"
            value={dayjs(states.reportDate).format('YYYY-MM-DD')}
            onChange={handleOnChange('reportDate')}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Date Of Onset"
            size="small"
            fullWidth
            type="date"
            value={dayjs(states.dateOfOnset).format('YYYY-MM-DD')}
            onChange={handleOnChange('dateOfOnset')}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Select
              native
              value={states.gender}
              onChange={handleOnChange('gender')}
              inputProps={{
                name: 'gender',
                id: 'gender',
              }}
            >
              <option value="F">F</option>
              <option value="M">M</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Age"
            size="small"
            fullWidth
            type="number"
            value={states.age}
            onChange={handleOnChange('age')}
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor="status">Status</InputLabel>
            <Select
              native
              value={states.status}
              onChange={handleOnChange('status')}
              inputProps={{
                name: 'status',
                id: 'status',
              }}
            >
              <option value="Hospitalised">Hospitalised</option>
              <option value="Discharged">Discharged</option>
              <option value="Deceased">Deceased</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor="resident">Resident</InputLabel>
            <Select
              native
              value={states.resident}
              onChange={handleOnChange('resident')}
              inputProps={{
                name: 'resident',
                id: 'resident',
              }}
            >
              <option value="HK resident">HK resident</option>
              <option value="Non-HK resident">Non-HK resident</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor="classification">Classification</InputLabel>
            <Select
              native
              value={states.conficlassificationrmed}
              onChange={handleOnChange('classification')}
              inputProps={{
                name: 'classification',
                id: 'classification',
              }}
            >
              <option value="Imported case">Imported case</option>
              <option value="Local case">Local case</option>
              <option value="Possibly local case">Possibly local case</option>
              <option value="Epidemiologically linked with imported case">
                Epidemiologically linked with imported case
              </option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor="confirmed">Confirmed</InputLabel>
            <Select
              native
              value={states.confirmed}
              onChange={handleOnChange('confirmed')}
              inputProps={{
                name: 'confirmed',
                id: 'confirmed',
              }}
            >
              <option value={1}>True</option>
              <option value={0}>False</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CaseInfo;
