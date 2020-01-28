import React from 'react';
import {Card, CardContent, CardHeader, List, ListItem, ListItemText} from '@material-ui/core';
import colors from '../assets/colors';

function CardCredit() {
  return (
    <Card>
      <CardHeader title="Limite de crédito" />
      <CardContent>
        <List>
          <ListItem>
            <ListItemText
              primary="R$ 12.000,20"
              secondary="Concedido"
              primaryTypographyProps={{style: {color: colors.blue}}}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="R$ 3.105,00"
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
