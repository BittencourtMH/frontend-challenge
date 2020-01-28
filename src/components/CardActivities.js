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
import {Group, Mail, Phone, Search} from '@material-ui/icons';
import colors from '../assets/colors';

function CardActivities() {
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
              <Avatar variant="rounded" style={{backgroundColor: colors.gray}}>25</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Total" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.red}}>1</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Em atraso" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.blue}}>0</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Em andamento" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.yellow}}>3</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Previstas" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" style={{backgroundColor: colors.green}}>21</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Concluídas" />
          </ListItem>
        </List>
        <Stepper orientation="vertical" activeStep={3}>
          <Step expanded>
            <StepLabel
              icon={
                <Avatar style={{width: 24, height: 24, backgroundColor: colors.red}}> </Avatar>
              }
            >
              Atividades em atraso
            </StepLabel>
            <StepContent>
              <List>
                <ListItem>
                  <ListItemIcon style={{color: colors.red}}>
                    <Phone />
                  </ListItemIcon>
                  <ListItemText
                    primary="Ligação de agendamento da reunião"
                    secondary={
                      <div>
                        Erica Collins<br />
                        Em atraso por 04 dias
                      </div>
                    }
                  />
                </ListItem>
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
            <StepContent>
              <List>
                <ListItem>
                  <ListItemIcon style={{color: colors.yellow}}>
                    <Group />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reunião orçamento"
                    secondary={
                      <div>
                        Abigail Fisher<br />
                        Hoje às 15h
                      </div>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon style={{color: colors.yellow}}>
                    <Mail />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email documentação"
                    secondary={
                      <div>
                        Jeffery King<br />
                        Amanhã às 09h45
                      </div>
                    }
                  />
                </ListItem>
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
            <StepContent>Apresentação feira agrícola</StepContent>
          </Step>
        </Stepper>
      </CardContent>
    </Card>
  )
}

export default CardActivities;
