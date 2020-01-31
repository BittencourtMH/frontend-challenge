import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Toolbar
} from '@material-ui/core';
import {
  AttachMoney,
  BarChart,
  DashboardOutlined,
  DescriptionOutlined,
  Event,
  Group,
  LocalAtm,
  LocalOffer,
  Menu,
  MyLocation,
  PersonOutline,
  Search,
  SettingsOutlined
} from '@material-ui/icons';
import Content from './Content';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerClose: {
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <Toolbar>
          <IconButton color="inherit" edge="start">
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, classes.drawerClose)}
        classes={{paper: clsx(classes.drawerClose)}}
      >
        <div className={classes.toolbar}>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><Search /></ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon><PersonOutline /></ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon><Event /></ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon><LocalOffer /></ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon><AttachMoney /></ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon><DescriptionOutlined /></ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon><BarChart /></ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon><LocalAtm /></ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon><MyLocation /></ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon><DashboardOutlined /></ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon><SettingsOutlined /></ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon><Group /></ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Content />
      </main>
    </div>
  );
}

export default Header;
