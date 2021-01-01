import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

const CaseCard = (props) => {
  const classes = useStyles();
  const { title, textColor, count, isLoading } = props;
  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} style={{ color: textColor }} gutterBottom>
          {title}
        </Typography>
        {isLoading ? 'loading...' : <Typography variant="h6">{count}</Typography>}
      </CardContent>
    </Card>
  );
};

export default CaseCard;
