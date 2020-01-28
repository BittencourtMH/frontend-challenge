import React from 'react';
import {Grid} from '@material-ui/core';
import CardGeneral from './CardGeneral'
import CardLocation from './CardLocation';

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
      </Grid>
    </div>
  );
}

export default Content;