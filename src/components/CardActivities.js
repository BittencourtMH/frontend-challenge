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
import data from '../assets/data'

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
                <ListItem>
                  <ListItemIcon style={{color: colors.red}}>
                    <Phone />
                  </ListItemIcon>
                  <ListItemText
                    primary="Ligação de agendamento da reunião"
                    secondary={
                      <span>
                        Erica Collins<br />
                        Em atraso por 04 dias
                      </span>
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
            <StepContent style={{borderLeft: '1px solid #bdbdbd'}}>
              <List>
                <ListItem>
                  <ListItemIcon style={{color: colors.yellow}}>
                    <Group />
                  </ListItemIcon>
                  <ListItemText
                    primary="Reunião orçamento"
                    secondary={
                      <span>
                        Abigail Fisher<br />
                        Hoje às 15h
                      </span>
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
                      <span>
                        Jeffery King<br />
                        Amanhã às 09h45
                      </span>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon style={{color: colors.yellow}}>
                    <Event />
                  </ListItemIcon>
                  <ListItemText
                    primary="Almoço corporativo"
                    secondary={
                      <span>
                        Lawrence Kelly<br />
                        Amanhã às 15h
                      </span>
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
            <StepContent style={{borderLeft: '1px solid #bdbdbd'}}>
              <List>
                <ListItem>
                  <ListItemIcon style={{color: colors.green}}>
                    <Event />
                  </ListItemIcon>
                  <ListItemText
                    primary="Apresentação feira agrícola"
                    secondary={
                      <span>
                        Caroline Diaz<br />
                        Segunda-feira (17/09/2018) às 08h
                      </span>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon style={{color: colors.green}}>
                    <Mail />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email orçamento"
                    secondary={
                      <span>
                        Arthur Clark<br />
                        Terça-feira (18/09/2018) às 13h
                      </span>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon style={{color: colors.green}}>
                    <Mail />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email contrato"
                    secondary={
                      <span>
                        Frieda Howard<br />
                        Quarta-feira (19/09/2018) às 10h
                      </span>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon style={{color: colors.green}}>
                    <Phone />
                  </ListItemIcon>
                  <ListItemText
                    primary="Ligação contrato"
                    secondary={
                      <span>
                        Dylan Watsor<br />
                        Quarta-feira (19/09/2018) às 13h
                      </span>
                    }
                  />
                </ListItem>
              </List>
            </StepContent>
          </Step>
        </Stepper>
      </CardContent>
    </Card>
  )
}

export default CardActivities;
