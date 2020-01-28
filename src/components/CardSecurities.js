import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import colors from '../assets/colors'

function CardSecurities() {
  return (
    <Card>
      <CardHeader title="Títulos financeiros (5)" />
      <CardContent>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{backgroundColor: colors.red}}>1</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vencidos" secondary="R$ 3.105,00" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{backgroundColor: colors.orange}}>2</Avatar>
            </ListItemAvatar>
            <ListItemText primary="A vencer" secondary="R$ 3.105,00" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{backgroundColor: colors.green}}>2</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Pagos" secondary="R$ 3.105,00" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

export default CardSecurities;
