import React from 'react';
import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Step,
  StepContent,
  StepLabel
} from '@material-ui/core';
import {Event, Group, Mail, Phone} from '@material-ui/icons';
import differenceDays from '../utils/differenceDays';
import {formatDate, formatTime} from '../utils/formatDate';

function ListActivities(props) {
  const {activities, label, color, delayed, ...stepProps} = props;
  const now = new Date();

  function typeIcon(type) {
    switch (type) {
      case 1: return <Phone />;
      case 2: return <Group />;
      case 3: return <Mail />;
      case 4: default: return <Event />;
    }
  }

  return (
    <Step expanded {...stepProps}>
      <StepLabel
        icon={
          <Avatar style={{width: 24, height: 24, backgroundColor: color}}> </Avatar>
        }
      >
        {label}
      </StepLabel>
      <StepContent style={{borderLeft: '1px solid #bdbdbd'}}>
        <List>
          {
            activities.map(activity => (
              <ListItem key={activity.id}>
                <ListItemIcon style={{color: color}}>
                  {typeIcon(activity.type)}
                </ListItemIcon>
                <ListItemText
                  primary={activity.description}
                  secondary={
                    <span>
                      {activity.person}<br />
                      {
                        delayed
                          ? `Em atraso por ${differenceDays(activity.date, now)} dias`
                          : `${formatDate(activity.date, now)} às ${formatTime(activity.date)}`
                      }
                    </span>
                  }
                />
              </ListItem>
            ))
          }
        </List>
      </StepContent>
    </Step>
  );
}

export default ListActivities;
