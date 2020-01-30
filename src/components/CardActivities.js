import React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  TextField
} from '@material-ui/core';
import {Event, Group, Mail, Phone, Search} from '@material-ui/icons';
import colors from '../assets/colors';
import differenceDays from '../utils/differenceDays';
import {formatDate, formatTime} from '../utils/formatDate';

function CardActivities(props) {
  const {activities} = props;
  const amount = Object.keys(activities).reduce((sum, key) => sum + activities[key].length, 0);
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
    <Card>
      <CardHeader title="Atividades" />
      <CardContent>
        <TextField
          fullWidth
          placeholder="Pesquisar..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Search />
              </InputAdornment>
            )
          }}
        />
        <List style={{display: 'flex'}}>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.gray}}>
                {amount}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Total" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.red}}>
                {activities.delayed.length}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Em atraso" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.blue}}>
                {activities.doing.length}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Em andamento" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.yellow}}>
                {activities.toDo.length}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Previstas" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.green}}>
                {activities.done.length}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Concluídas" />
          </ListItem>
        </List>
        <Stepper orientation="vertical" activeStep={4}>
          <Step expanded>
            <StepLabel
              icon={
                <Avatar style={{width: 24, height: 24, backgroundColor: colors.red}}> </Avatar>
              }
            >
              Atividades em atraso
            </StepLabel>
            <StepContent style={{borderLeft: '1px solid #bdbdbd'}}>
              <List>
                {
                  activities.delayed.map(activity => (
                    <ListItem key={activity.id}>
                      <ListItemIcon style={{color: colors.red}}>
                        {typeIcon(activity.type)}
                      </ListItemIcon>
                      <ListItemText
                        primary={activity.description}
                        secondary={
                          <span>
                            {activity.person}<br />
                            Em atraso por {differenceDays(activity.date, now)} dias
                          </span>
                        }
                      />
                    </ListItem>
                  ))
                }
              </List>
            </StepContent>
          </Step>
          <Step expanded>
            <StepLabel
              icon={
                <Avatar style={{width: 24, height: 24, backgroundColor: colors.yellow}}> </Avatar>
              }
            >
              Atividades previstas
            </StepLabel>
            <StepContent style={{borderLeft: '1px solid #bdbdbd'}}>
              <List>
                {
                  activities.toDo.map(activity => (
                    <ListItem key={activity.id}>
                      <ListItemIcon style={{color: colors.yellow}}>
                        {typeIcon(activity.type)}
                      </ListItemIcon>
                      <ListItemText
                        primary={activity.description}
                        secondary={
                          <span>
                            {activity.person}<br />
                            {formatDate(activity.date, now)} às {formatTime(activity.date)}
                          </span>
                        }
                      />
                    </ListItem>
                  ))
                }
              </List>
            </StepContent>
          </Step>
          <Step expanded>
            <StepLabel
              icon={
                <Avatar style={{width: 24, height: 24, backgroundColor: colors.green}}> </Avatar>
              }
            >
              Atividades concluídas
            </StepLabel>
            <StepContent style={{borderLeft: '1px solid #bdbdbd'}}>
              <List>
                {
                  activities.done.map(activity => (
                    <ListItem key={activity.id}>
                      <ListItemIcon style={{color: colors.green}}>
                        {typeIcon(activity.type)}
                      </ListItemIcon>
                      <ListItemText
                        primary={activity.description}
                        secondary={
                          <span>
                            {activity.person}<br />
                            {formatDate(activity.date, now)} às {formatTime(activity.date)}
                          </span>
                        }
                      />
                    </ListItem>
                  ))
                }
              </List>
            </StepContent>
          </Step>
        </Stepper>
      </CardContent>
    </Card>
  )
}

export default CardActivities;
