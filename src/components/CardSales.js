import React from 'react';
import {Card, CardContent, CardHeader} from '@material-ui/core';

function CardSales(props) {
  const {translation, elevation} = props;
  return (
    <Card elevation={elevation}>
      <CardHeader title={translation.cardTitle.sales} />
      <CardContent>{translation.action.addGraphHere}</CardContent>
    </Card>
  )
}

export default CardSales;
