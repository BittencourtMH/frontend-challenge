import React from 'react';
import {Card, CardContent, CardHeader, List, ListItem, ListItemText} from '@material-ui/core';
import colors from '../assets/colors';
import {formatCurrency} from '../utils/formatCurrency';

function CardCredit(props) {
  const {credits} = props;
  return (
    <Card>
      <CardHeader title="Limite de crédito" />
      <CardContent>
        <List>
          <ListItem>
            <ListItemText
              primary={formatCurrency(credits.given)}
              secondary="Concedido"
              primaryTypographyProps={{style: {color: colors.blue}}}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={formatCurrency(credits.available)}
              secondary="Disponível"
              primaryTypographyProps={{style: {color: colors.green}}}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

export default CardCredit;
