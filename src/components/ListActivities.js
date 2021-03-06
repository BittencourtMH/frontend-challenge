import {
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Step,
  StepContent,
  StepLabel,
  makeStyles
} from '@material-ui/core';
import { Event, Group, Mail, Phone } from '@material-ui/icons';
import differenceDays from '../utils/differenceDays';
import { formatDate, formatTime } from '../utils/formatDate';
import replaceVariables from '../utils/replaceVariables';

const useStyles = makeStyles({
  avatar: {
    width: 24,
    height: 24,
    backgroundColor: props => props.color
  },
  stepContent: {
    borderLeft: '1px solid #bdbdbd'
  },
  listItemIcon: {
    color: props => props.color
  }
});

function ListActivities(props) {
  const { activities, label, color, delayed, translation, ...stepProps } = props;
  const now = new Date();
  const classes = useStyles(props);

  function typeIcon(type) {
    switch (type) {
      case 1: return <Phone />;
      case 2: return <Group />;
      case 3: return <Mail />;
      case 4: default: return <Event />;
    }
  }

  function dateText(date) {
    if (delayed) {
      return replaceVariables(translation.date.daysLate, { days: differenceDays(date, now) });
    }
    const object = { date: formatDate(date, now), time: formatTime(date) };
    return replaceVariables(translation.date.dateAndTime, object);
  }

  return (
    <Step expanded {...stepProps}>
      <StepLabel
        icon={
          <Avatar className={classes.avatar}> </Avatar>
        }
      >
        {label}
      </StepLabel>
      <StepContent className={classes.stepContent}>
        <List dense>
          {
            activities.map(activity => (
              <ListItem key={activity.id}>
                <ListItemIcon className={classes.listItemIcon}>
                  {typeIcon(activity.type)}
                </ListItemIcon>
                <ListItemText
                  primary={activity.description}
                  secondary={
                    <span>
                      {activity.person}<br />
                      {dateText(activity.date)}
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
