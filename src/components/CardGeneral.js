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
  Typography,
  makeStyles
} from '@material-ui/core';
import {Facebook, Instagram, LinkedIn, Mail, Phone, Twitter, WhatsApp} from '@material-ui/icons';
import formatPhone from '../utils/formatPhone';

const useStyles = makeStyles({
  photo: {
    marginRight: 16,
    width: '4em',
    height: '4em'
  },
  cardActions: {
    float: 'right'
  }
});

function CardGeneral(props) {
  const {data, translation} = props;
  const classes = useStyles();
  return (
    <Card>
      <CardHeader title={translation.cardTitle.generalInfo} />
      <CardContent>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={data.photo} className={classes.photo} />
            </ListItemAvatar>
            <ListItemText
              primary={data.name}
              secondary={
                <React.Fragment>
                  <Typography>
                    {data.company}
                  </Typography>
                  <Chip
                    label={translation.activeStatus[data.active ? 'active' : 'inactive']}
                    color={data.active ? 'primary' : 'secondary'}
                  />
                </React.Fragment>
              }
              secondaryTypographyProps={{component: 'div'}}
            />
          </ListItem>
        </List>
        <List dense>
          {
            data.phones.map(phone => (
              <ListItem key={phone.id}>
                <ListItemIcon>
                  <Phone />
                </ListItemIcon>
                <ListItemText primary={formatPhone(phone.number)} secondary={phone.description} />
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
      <CardActions className={classes.cardActions}>
        <IconButton
          href={`https://wa.me/55${data.whatsApp}`}
          target="_blank"
          disabled={data.whatsApp === ''}
        >
          <WhatsApp />
        </IconButton>
        <IconButton
          href={`https://fb.me/55${data.facebook}`}
          target="_blank"
          disabled={data.facebook === ''}
        >
          <Facebook />
        </IconButton>
        <IconButton
          href={`https://instagram.com/${data.instagram}`}
          target="_blank"
          disabled={data.instagram === ''}
        >
          <Instagram />
        </IconButton>
        <IconButton
          href={`https://twitter.com/${data.twitter}`}
          target="_blank"
          disabled={data.twitter === ''}
        >
          <Twitter />
        </IconButton>
        <IconButton
          href={`https://linkedin.com/in/${data.linkedIn}`}
          target="_blank"
          disabled={data.linkedIn === ''}
        >
          <LinkedIn />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardGeneral;
