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

function CardOpportunities() {
  return (
    <Card>
      <CardHeader
        title="Oportunidades (7)"
        action={
          <IconButton>
            <Info />
          </IconButton>
        }
      />
      <CardContent>
        <List>
          <Grid container>
            <Grid item xs="6">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>4</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Ganhas" secondary="R$ 20.000,00" />
              </ListItem>
            </Grid>
            <Grid item xs="6">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>1</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Perdida" secondary="R$ 4.300,00" />
              </ListItem>
            </Grid>
            <Grid item xs="6">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>2</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Abertas" secondary="Diversas moedas" />
              </ListItem>
            </Grid>
            <Grid item xs="6">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>0</Avatar>
                </ListItemAvatar>
                <ListItemText primary="Descartadas" secondary="-" />
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