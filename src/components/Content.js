import React from 'react';
import {Grid} from '@material-ui/core';
import CardGeneral from './CardGeneral';
import CardLocation from './CardLocation';
import CardOpportunities from './CardOpportunities';
import CardCredit from './CardCredit';
import CardSales from './CardSales';
import CardSecurities from './CardSecurities';
import CardActivities from './CardActivities';
import data from '../assets/data';

function Content() {

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <CardGeneral data={data} />
        </Grid>
        <Grid item xs={6}>
          <CardLocation places={data.places} />
        </Grid>
        <Grid item xs={6}>
          <CardOpportunities opportunities={data.opportunities} />
        </Grid>
        <Grid item xs={6}>
          <CardCredit credits={data.credits} />
        </Grid>
        <Grid item xs={6}>
          <CardSales />
        </Grid>
        <Grid item xs={6}>
          <CardSecurities securities={data.securities} />
        </Grid>
        <Grid item xs={12}>
          <CardActivities activities={data.activities} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
