import React from 'react';
import { Grid, makeStyles, TextField, Card } from '@material-ui/core';
import dayjs from 'dayjs';

dayjs.locale('zh-hk');
const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: '15px',
  },
}));

const RuleInfo = (props) => {
  const classes = useStyles();
  const { states, handleOnChange } = props;

  return (
    <Card className={classes.content}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Rule Name"
            size="small"
            fullWidth
            value={states.ruleName}
            onChange={handleOnChange('ruleName')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Start Date"
            size="small"
            type="date"
            fullWidth
            value={dayjs(states.startDate).format('YYYY-MM-DD')}
            onChange={handleOnChange('startDate')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="End Date"
            size="small"
            type="date"
            fullWidth
            value={dayjs(states.endDate).format('YYYY-MM-DD')}
            onChange={handleOnChange('endDate')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            size="small"
            fullWidth
            value={states.description}
            onChange={handleOnChange('description')}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default RuleInfo;
