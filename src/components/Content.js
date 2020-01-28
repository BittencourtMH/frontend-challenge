import React from 'react';
import {Grid} from '@material-ui/core';
import CardGeneral from './CardGeneral';
import CardLocation from './CardLocation';
import CardOpportunities from './CardOpportunities';
import CardCredit from './CardCredit';
import CardSales from './CardSales';
import CardSecurities from './CardSecurities';

function Content() {
  return (
    <div>
      <Grid container spacing="1">
        <Grid item xs="6">
          <CardGeneral />
        </Grid>
        <Grid item xs="6">
          <CardLocation />
        </Grid>
        <Grid item xs="6">
          <CardOpportunities />
        </Grid>
        <Grid item xs="6">
          <CardCredit />
        </Grid>
        <Grid item xs="6">
          <CardSales />
        </Grid>
        <Grid item xs="6">
          <CardSecurities />
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
