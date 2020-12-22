import { useState } from 'react';
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
  TextField,
  makeStyles
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import ListActivities from './ListActivities';
import getLabel from '../utils/getLabel';
import colors from '../assets/colors';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%'
  },
  list: {
    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: '1fr'
    }
  },
  total: {
    backgroundColor: colors.gray
  },
  delayed: {
    backgroundColor: colors.red
  },
  doing: {
    backgroundColor: colors.blue
  },
  toDo: {
    backgroundColor: colors.yellow
  },
  done: {
    backgroundColor: colors.green
  }
}));

function CardActivities(props) {
  const { activities, translation, elevation } = props;
  const total = Object.keys(activities).reduce((sum, key) => sum + activities[key].length, 0);
  const [filteredActivities, setActivities] = useState({ ...activities });
  const classes = useStyles();

  function filterActivities(event) {
    const text = event.target.value.trim().toLowerCase();
    const filtered = {};
    Object.keys(activities).forEach(key => {
      filtered[key] = [];
      activities[key].forEach(activity => {
        const { description, person } = activity;
        if (description.toLowerCase().includes(text) || person.toLowerCase().includes(text)) {
          filtered[key].push(activity);
        }
      });
    });
    setActivities(filtered);
  }

  return (
    <Card elevation={elevation} className={classes.card}>
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
        <List dense className={classes.list}>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" className={classes.total}>
                {total}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={getLabel(translation.activityStatus.total, total)}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" className={classes.delayed}>
                {activities.delayed.length}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={getLabel(translation.activityStatus.delayed, activities.delayed.length)}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" className={classes.doing}>
                {activities.doing.length}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={getLabel(translation.activityStatus.doing, activities.doing.length)}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" className={classes.toDo}>
                {activities.toDo.length}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={getLabel(translation.activityStatus.toDo, activities.toDo.length)}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" className={classes.done}>
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
  );
}

export default CardActivities;
