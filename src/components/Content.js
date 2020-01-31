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
import translation from '../assets/translations/pt';

function Content() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <CardGeneral data={data} translation={translation} />
        </Grid>
        <Grid item xs={6}>
          <CardLocation address={data.address} translation={translation} />
        </Grid>
        <Grid item xs={6}>
          <CardOpportunities opportunities={data.opportunities} translation={translation} />
        </Grid>
        <Grid item xs={6}>
          <CardCredit credits={data.credits} translation={translation} />
        </Grid>
        <Grid item xs={6}>
          <CardSales translation={translation} />
        </Grid>
        <Grid item xs={6}>
          <CardSecurities securities={data.securities} translation={translation} />
        </Grid>
        <Grid item xs={12}>
          <CardActivities activities={data.activities} translation={translation} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
