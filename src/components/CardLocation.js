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
  const {address, translation} = props;
  const url =
    'https://google.com/maps/embed/v1/place?key=AIzaSyDjhkEQg0w_qaaIRCoALluSs9rZKRyk6pg&q=';
  const {street, neighborhood, postalCode, city, state} = address;
  return (
    <Card>
      <CardHeader title={translation.cardTitle.location} />
      <CardContent>
        <iframe
          title="Google Maps"
          src={`${url}${street} ${neighborhood} ${postalCode} ${city} ${state}`}
          style={{width: '100%', height: 200, border: 0}}
        >
        </iframe>
        <List dense>
          <ListItem>
            <ListItemIcon>
              <LocationOn />
            </ListItemIcon>
            <ListItemText primary={street} secondary={address.description} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}

export default CardLocation;
