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

function CardLocation(props) {
  const {places, translation} = props;
  return (
    <Card>
      <CardHeader title={translation.cardTitle.location} />
      <CardContent>
        <List>
          {
            places.map(place => (
              <ListItem key={place.id}>
                <ListItemIcon>
                  <LocationOn />
                </ListItemIcon>
                <ListItemText primary={place.address} secondary={place.description} />
              </ListItem>
            ))
          }
        </List>
      </CardContent>
    </Card>
  );
}

export default CardLocation;
