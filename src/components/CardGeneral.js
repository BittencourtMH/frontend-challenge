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

function CardGeneral(props) {
  const {data} = props;
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
              primary={data.name}
              secondary={
                <React.Fragment>
                  <Typography>
                    {data.company}
                  </Typography>
                  <Chip label={data.active ? 'Ativo' : 'Inativo'} color="primary" />
                </React.Fragment>
              }
              secondaryTypographyProps={{component: 'div'}}
            />
          </ListItem>
        </List>
        <List>
          {
            data.phones.map(phone => (
              <ListItem key={phone.id}>
                <ListItemIcon>
                  <Phone />
                </ListItemIcon>
                <ListItemText primary={phone.number} secondary={phone.description} />
              </ListItem>
            ))
          }
          {
            data.emails.map(email => (
              <ListItem key={email.id}>
                <ListItemIcon>
                  <Mail />
                </ListItemIcon>
                <ListItemText primary={email.address} secondary={email.description} />
              </ListItem>
            ))
          }
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
