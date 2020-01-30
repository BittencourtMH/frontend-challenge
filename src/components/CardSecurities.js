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
import colors from '../assets/colors';
import {formatValueWithAmount} from '../utils/formatValue';

function CardSecurities(props) {
  const {securities} = props;
  const amount = Object.keys(securities).reduce((sum, key) => sum + securities[key].amount, 0);
  return (
    <Card>
      <CardHeader title={`Títulos financeiros (${amount})`} />
      <CardContent>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.red}}>
                {securities.overdue.amount}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Vencidos"
              secondary={formatValueWithAmount(securities.overdue)}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.orange}}>
                {securities.due.amount}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="A vencer"
              secondary={formatValueWithAmount(securities.due)}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.green}}>
                {securities.paid.amount}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Pagos"
              secondary={formatValueWithAmount(securities.paid)}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

export default CardSecurities;
