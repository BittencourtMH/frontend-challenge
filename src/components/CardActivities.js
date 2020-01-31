import React, {useState} from 'react';
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
import getLabel from '../utils/getLabel';
import colors from '../assets/colors';

function CardActivities(props) {
  const {activities, translation} = props;
  const total = Object.keys(activities).reduce((sum, key) => sum + activities[key].length, 0);
  const [filteredActivities, setActivities] = useState({...activities});

  function filterActivities(event) {
    const text = event.target.value.trim().toLowerCase();
    const filtered = {};
    Object.keys(activities).forEach(key => {
      filtered[key] = [];
      activities[key].forEach(activity => {
        const {description, person} = activity;
        if (description.toLowerCase().includes(text) || person.toLowerCase().includes(text)) {
          filtered[key].push(activity);
        }
      });
    });
    setActivities(filtered);
  }

  return (
    <Card>
      <CardHeader title={translation.cardTitle.activities} />
      <CardContent>
        <TextField
          fullWidth
          placeholder={translation.action.search}
          variant="outlined"
          onChange={filterActivities}
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
                {total}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={getLabel(translation.activityStatus.total, total)}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.red}}>
                {activities.delayed.length}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={getLabel(translation.activityStatus.delayed, activities.delayed.length)}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.blue}}>
                {activities.doing.length}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={getLabel(translation.activityStatus.doing, activities.doing.length)}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.yellow}}>
                {activities.toDo.length}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={getLabel(translation.activityStatus.toDo, activities.toDo.length)}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.green}}>
                {activities.done.length}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={getLabel(translation.activityStatus.done, activities.done.length)}
            />
          </ListItem>
        </List>
        <Stepper orientation="vertical" activeStep={4}>
          {
            filteredActivities.delayed.length > 0 && (
              <ListActivities
                activities={filteredActivities.delayed}
                label={
                  getLabel(
                    translation.fullActivityStatus.delayed, filteredActivities.delayed.length
                  )
                }
                color={colors.red}
                delayed={true}
                translation={translation}
              />
            )
          }
          {
            filteredActivities.doing.length > 0 && (
              <ListActivities
                activities={filteredActivities.doing}
                label={
                  getLabel(translation.fullActivityStatus.doing, filteredActivities.doing.length)
                }
                color={colors.blue}
                delayed={false}
                translation={translation}
              />
            )
          }
          {
            filteredActivities.toDo.length > 0 && (
              <ListActivities
                activities={filteredActivities.toDo}
                label={
                  getLabel(translation.fullActivityStatus.toDo, filteredActivities.toDo.length)
                }
                color={colors.yellow}
                delayed={false}
                translation={translation}
              />
            )
          }
          {
            filteredActivities.done.length > 0 && (
              <ListActivities
                activities={filteredActivities.done}
                label={
                  getLabel(translation.fullActivityStatus.done, filteredActivities.done.length)
                }
                color={colors.green}
                delayed={false}
                translation={translation}
              />
            )
          }
        </Stepper>
      </CardContent>
    </Card>
  )
}

export default CardActivities;
