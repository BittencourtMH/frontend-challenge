import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Toolbar,
  makeStyles
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
  drawerClose: {
    overflowX: 'hidden',
    width: theme.spacing(9) + 1
  },
  toolbar: {
    ...theme.mixins.toolbar
  }
}));

function Page() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" edge="start">
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={classes.drawerClose}
        classes={{ paper: classes.drawerClose }}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Search />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonOutline />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Event />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalOffer />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AttachMoney />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DescriptionOutlined />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BarChart />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocalAtm />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MyLocation />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DashboardOutlined />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsOutlined />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <main>
        <div className={classes.toolbar} />
        <Content />
      </main>
    </div>
  );
}

export default Page;
