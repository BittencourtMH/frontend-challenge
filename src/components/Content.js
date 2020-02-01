import React from 'react';
import {Grid} from '@material-ui/core';
import CardActivities from './CardActivities';
import CardCredit from './CardCredit';
import CardGeneral from './CardGeneral';
import CardLocation from './CardLocation';
import CardOpportunities from './CardOpportunities';
import CardSales from './CardSales';
import CardSecurities from './CardSecurities';
import translation from '../assets/translations/pt';
import data from '../assets/data';

function Content() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={4} xl={6} container spacing={2}>
        <Grid item xs={12} md={6} lg={12} xl={6}>
          <CardGeneral data={data} translation={translation} />
        </Grid>
        <Grid item xs={12} md={6} lg={12} xl={6}>
          <CardLocation address={data.address} translation={translation} />
        </Grid>
        <Grid item xs={12} md={6} lg={12} xl={6}>
          <CardOpportunities opportunities={data.opportunities} translation={translation} />
        </Grid>
        <Grid item xs={12} md={6} lg={12} xl={6}>
          <CardCredit credits={data.credits} translation={translation} />
        </Grid>
        <Grid item xs={12} md={6} lg={12} xl={6}>
          <CardSales translation={translation} />
        </Grid>
        <Grid item xs={12} md={6} lg={12} xl={6}>
          <CardSecurities securities={data.securities} translation={translation} />
        </Grid>
      </Grid>
      <Grid item xs={12} lg={8} xl={6}>
        <CardActivities activities={data.activities} translation={translation} />
      </Grid>
    </Grid>
  );
}

export default Content;
