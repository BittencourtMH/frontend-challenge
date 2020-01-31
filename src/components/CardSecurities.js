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
import {formatCurrencyWithAmount} from '../utils/formatCurrency';
import getLabel from '../utils/getLabel';

function CardSecurities(props) {
  const {securities, translation} = props;
  const amount = Object.keys(securities).reduce((sum, key) => sum + securities[key].amount, 0);
  return (
    <Card>
      <CardHeader title={`${translation.cardTitle.securities} (${amount})`} />
      <CardContent>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.red}}>
                {securities.overdue.amount}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={getLabel(translation.securityType.overdue, securities.overdue.amount)}
              secondary={formatCurrencyWithAmount(securities.overdue, translation)}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.orange}}>
                {securities.due.amount}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={getLabel(translation.securityType.due, securities.due.amount)}
              secondary={formatCurrencyWithAmount(securities.due, translation)}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.green}}>
                {securities.paid.amount}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={getLabel(translation.securityType.paid, securities.paid.amount)}
              secondary={formatCurrencyWithAmount(securities.paid, translation)}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

export default CardSecurities;
