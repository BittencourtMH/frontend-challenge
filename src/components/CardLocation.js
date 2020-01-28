import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import {LocationOn} from '@material-ui/icons'

function CardLocation() {
  return (
    <Card>
      <CardHeader title="Local" />
      <CardContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <LocationOn />
            </ListItemIcon>
            <ListItemText primary="Avenida Brasil, 4019" secondary="Trabalho" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default CardLocation;
