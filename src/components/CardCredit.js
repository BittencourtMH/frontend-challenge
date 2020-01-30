import React from 'react';
import {Card, CardContent, CardHeader, List, ListItem, ListItemText} from '@material-ui/core';
import colors from '../assets/colors';
import {formatValue} from '../utils/formatValue';

function CardCredit(props) {
  const {credits} = props;
  return (
    <Card>
      <CardHeader title="Limite de crédito" />
      <CardContent>
        <List>
          <ListItem>
            <ListItemText
              primary={formatValue(credits.given)}
              secondary="Concedido"
              primaryTypographyProps={{style: {color: colors.blue}}}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={formatValue(credits.available)}
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
