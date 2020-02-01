import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import {formatCurrency} from '../utils/formatCurrency';
import colors from '../assets/colors';

const useStyles = makeStyles({
  given: {
    color: colors.blue
  },
  available: {
    color: colors.green
  }
});

function CardCredit(props) {
  const {credits, translation} = props;
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title={translation.cardTitle.creditLimit} />
      <CardContent>
        <List dense>
          <ListItem>
            <ListItemText
              primary={formatCurrency(credits.given, translation)}
              secondary={translation.creditType.given}
              classes={{primary: classes.given}}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={formatCurrency(credits.available, translation)}
              secondary={translation.creditType.available}
              classes={{primary: classes.available}}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

export default CardCredit;
