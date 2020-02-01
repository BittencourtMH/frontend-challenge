import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import {formatCurrencyWithAmount} from '../utils/formatCurrency';
import getLabel from '../utils/getLabel';
import colors from '../assets/colors';

const useStyles = makeStyles({
  overdue: {
    backgroundColor: colors.red
  },
  due: {
    backgroundColor: colors.orange
  },
  paid: {
    backgroundColor: colors.green
  }
});

function CardSecurities(props) {
  const {securities, translation} = props;
  const amount = Object.keys(securities).reduce((sum, key) => sum + securities[key].amount, 0);
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title={`${translation.cardTitle.securities} (${amount})`} />
      <CardContent>
        <List dense>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" className={classes.overdue}>
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
              <Avatar variant="rounded" className={classes.due}>
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
              <Avatar variant="rounded" className={classes.paid}>
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
