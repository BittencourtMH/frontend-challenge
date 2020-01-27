import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import {Facebook, Instagram, LinkedIn, Mail, Phone, Twitter, WhatsApp} from '@material-ui/icons'

function CardGeneral() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          Informações gerais
        </Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                src="/broken-image.jpg"
                style={{marginRight: 16, width: '4em', height: '4em'}}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Justine Robinson"
              secondary={
                <React.Fragment>
                  <Typography>
                    Acme inc
                  </Typography>
                  <Chip label="Ativo" color="primary" />
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Phone />
            </ListItemAvatar>
            <ListItemText primary="45 9 9555 5555" secondary="Celular" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Mail />
            </ListItemAvatar>
            <ListItemText primary="justine@email.com" secondary="Trabalho" />
          </ListItem>
        </List>
      </CardContent>
      <CardActions style={{float: 'right'}}>
        <IconButton>
          <WhatsApp />
        </IconButton>
        <IconButton disabled>
          <Facebook />
        </IconButton>
        <IconButton>
          <Instagram />
        </IconButton>
        <IconButton disabled>
          <Twitter />
        </IconButton>
        <IconButton disabled>
          <LinkedIn />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardGeneral;