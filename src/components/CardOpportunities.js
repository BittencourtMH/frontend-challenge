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
import {formatValueWithAmount} from '../utils/formatValue'

function CardOpportunities(props) {
  const {opportunities} = props;
  const amount = Object.keys(opportunities)
    .reduce((sum, key) => sum + opportunities[key].amount, 0);
  return (
    <Card>
      <CardHeader
        title={`Oportunidades (${amount})`}
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
                  primary="Ganhas"
                  secondary={formatValueWithAmount(opportunities.won)}
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
                  primary="Perdida"
                  secondary={formatValueWithAmount(opportunities.lost)}
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
                  primary="Abertas"
                  secondary={formatValueWithAmount(opportunities.open)}
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
                  primary="Descartadas"
                  secondary={formatValueWithAmount(opportunities.discarded)}
                />
              </ListItem>
            </Grid>
          </Grid>
        </List>
      </CardContent>
      <CardActions>
        <Button>Ver todas oportunidades</Button>
      </CardActions>
    </Card>
  );
}

export default CardOpportunities;
