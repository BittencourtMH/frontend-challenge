import React from 'react';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import {Facebook, Instagram, LinkedIn, Mail, Phone, Twitter, WhatsApp} from '@material-ui/icons'

function CardGeneral() {
  return (
    <Card>
      <CardHeader title="Informações gerais" />
      <CardContent>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{marginRight: 16, width: '4em', height: '4em'}} />
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
              secondaryTypographyProps={{component: 'div'}}
            />
          </ListItem>
        </List>
        <List>
          <ListItem>
            <ListItemIcon>
              <Phone />
            </ListItemIcon>
            <ListItemText primary="(45) 99555-5555" secondary="Celular" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Mail />
            </ListItemIcon>
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
