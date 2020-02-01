import React from 'react';
import {Card, CardContent, CardHeader} from '@material-ui/core';

function CardSales(props) {
  const {translation} = props;
  return (
    <Card>
      <CardHeader title={translation.cardTitle.sales} />
      <CardContent>{translation.action.addGraphHere}</CardContent>
    </Card>
  )
}

export default CardSales;
