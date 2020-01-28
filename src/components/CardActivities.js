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
  TextField
} from '@material-ui/core';
import {Search} from '@material-ui/icons';
import colors from '../assets/colors';

function CardActivities() {
  return (
    <Card>
      <CardHeader title="Atividades" />
      <CardContent>
        <TextField
          fullWidth
          label="Pesquisar..."
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
              <Avatar style={{backgroundColor: colors.gray}}>25</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Total" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{backgroundColor: colors.red}}>1</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Em atraso" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{backgroundColor: colors.blue}}>0</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Em andamento" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{backgroundColor: colors.yellow}}>3</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Previstas" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{backgroundColor: colors.green}}>21</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Concluídas" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

export default CardActivities;
