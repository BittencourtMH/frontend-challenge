import React from 'react';
import { Fab, Grid, makeStyles } from '@material-ui/core';
import { Assignment } from '@material-ui/icons';
import CardActivities from './CardActivities';
import CardCredit from './CardCredit';
import CardGeneral from './CardGeneral';
import CardLocation from './CardLocation';
import CardOpportunities from './CardOpportunities';
import CardSales from './CardSales';
import CardSecurities from './CardSecurities';
import translation from '../assets/translations/pt';
import data from '../assets/data';

const useStyles = makeStyles(theme => ({
  content: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    justifyContent: 'center'
  },
  fab: {
    position: 'fixed',
    bottom: 16,
    right: 16
  }
}));

function Content() {
  const spacing = 2;
  const elevation = 5;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={spacing} className={classes.content}>
        <Grid container item spacing={spacing} xs={12} lg={4} xl={6}>
          <Grid item xs={12} md={6} lg={12} xl={6}>
            <CardGeneral data={data} translation={translation} elevation={elevation} />
          </Grid>
          <Grid item xs={12} md={6} lg={12} xl={6}>
            <CardLocation address={data.address} translation={translation} elevation={elevation} />
          </Grid>
          <Grid item xs={12} md={6} lg={12} xl={6}>
            <CardOpportunities
              opportunities={data.opportunities}
              translation={translation}
              elevation={elevation}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={12} xl={6}>
            <CardCredit credits={data.credits} translation={translation} elevation={elevation} />
          </Grid>
          <Grid item xs={12} md={6} lg={12} xl={6}>
            <CardSales translation={translation} elevation={elevation} />
          </Grid>
          <Grid item xs={12} md={6} lg={12} xl={6}>
            <CardSecurities
              securities={data.securities}
              translation={translation}
              elevation={elevation}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} lg={8} xl={6} spacing={spacing}>
          <Grid item xs={12}>
            <CardActivities
              activities={data.activities}
              translation={translation}
              elevation={elevation}
            />
          </Grid>
        </Grid>
      </Grid>
      <Fab color="primary" className={classes.fab}>
        <Assignment />
      </Fab>
    </React.Fragment>
  );
}

export default Content;
