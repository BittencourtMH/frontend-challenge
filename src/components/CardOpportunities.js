import React from 'react';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import {Info} from '@material-ui/icons';
import colors from '../assets/colors';
import {formatCurrencyWithAmount} from '../utils/formatCurrency'
import getLabel from '../utils/getLabel';

function CardOpportunities(props) {
  const {opportunities, translation} = props;
  const amount = Object.keys(opportunities)
    .reduce((sum, key) => sum + opportunities[key].amount, 0);
  return (
    <Card>
      <CardHeader
        title={`${translation.cardTitle.opportunities} (${amount})`}
        action={
          <IconButton>
            <Info />
          </IconButton>
        }
      />
      <CardContent>
        <List>
          <Grid container>
            <Grid item xs={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar variant="rounded" style={{backgroundColor: colors.green}}>
                    {opportunities.won.amount}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={getLabel(translation.opportunityType.won, opportunities.won.amount)}
                  secondary={formatCurrencyWithAmount(opportunities.won, translation)}
                />
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar variant="rounded" style={{backgroundColor: colors.red}}>
                    {opportunities.lost.amount}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={getLabel(translation.opportunityType.lost, opportunities.lost.amount)}
                  secondary={formatCurrencyWithAmount(opportunities.lost, translation)}
                />
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar variant="rounded" style={{backgroundColor: colors.blue}}>
                    {opportunities.open.amount}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={getLabel(translation.opportunityType.open, opportunities.open.amount)}
                  secondary={formatCurrencyWithAmount(opportunities.open, translation)}
                />
              </ListItem>
            </Grid>
            <Grid item xs={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar variant="rounded" style={{backgroundColor: colors.gray}}>
                    {opportunities.discarded.amount}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    getLabel(translation.opportunityType.discarded, opportunities.discarded.amount)
                  }
                  secondary={formatCurrencyWithAmount(opportunities.discarded, translation)}
                />
              </ListItem>
            </Grid>
          </Grid>
        </List>
      </CardContent>
      <CardActions>
        <Button>{translation.action.viewAllOpportunities}</Button>
      </CardActions>
    </Card>
  );
}

export default CardOpportunities;
