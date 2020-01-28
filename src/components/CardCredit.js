import React from 'react';
import {Card, CardContent, CardHeader, List, ListItem, ListItemText} from '@material-ui/core';

function CardCredit() {
  return (
    <Card>
      <CardHeader title="Limite de crédito" />
      <CardContent>
        <List>
          <ListItem>
            <ListItemText primary="R$ 12.000,20" secondary="Concedido" />
          </ListItem>
          <ListItem>
            <ListItemText primary="R$ 3.105,00" secondary="Disponível" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

export default CardCredit;
