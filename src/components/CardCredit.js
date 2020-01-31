import React from 'react';
import {Card, CardContent, CardHeader, List, ListItem, ListItemText} from '@material-ui/core';
import colors from '../assets/colors';
import {formatCurrency} from '../utils/formatCurrency';

function CardCredit(props) {
  const {credits, translation} = props;
  return (
    <Card>
      <CardHeader title={translation.cardTitle.creditLimit} />
      <CardContent>
        <List>
          <ListItem>
            <ListItemText
              primary={formatCurrency(credits.given, translation)}
              secondary={translation.creditType.given}
              primaryTypographyProps={{style: {color: colors.blue}}}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={formatCurrency(credits.available, translation)}
              secondary={translation.creditType.available}
              primaryTypographyProps={{style: {color: colors.green}}}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

export default CardCredit;
