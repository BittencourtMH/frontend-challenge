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
  ListItemText,
  Stepper,
  TextField
} from '@material-ui/core';
import {Search} from '@material-ui/icons';
import ListActivities from './ListActivities';
import colors from '../assets/colors';

function CardActivities(props) {
  const {activities} = props;
  const amount = Object.keys(activities).reduce((sum, key) => sum + activities[key].length, 0);
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
          {
            activities.delayed.length > 0 && (
              <ListActivities
                activities={activities.delayed}
                label="Atividades em atraso"
                color={colors.red}
                delayed={true}
              />
            )
          }
          {
            activities.doing.length > 0 && (
              <ListActivities
                activities={activities.doing}
                label="Atividades em andamento"
                color={colors.blue}
                delayed={false}
              />
            )
          }
          {
            activities.toDo.length > 0 && (
              <ListActivities
                activities={activities.toDo}
                label="Atividades previstas"
                color={colors.yellow}
                delayed={false}
              />
            )
          }
          {
            activities.done.length > 0 && (
              <ListActivities
                activities={activities.done}
                label="Atividades concluídas"
                color={colors.green}
                delayed={false}
              />
            )
          }
        </Stepper>
      </CardContent>
    </Card>
  )
}

export default CardActivities;
