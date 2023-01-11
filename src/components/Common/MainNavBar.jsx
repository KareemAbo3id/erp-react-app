import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from 'react-router-dom';
import { routersLinks, userOptions } from '../../Routes/routers';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Divider, Menu, MenuItem } from '@mui/material';

const drawerWidth = 280;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  ...theme.mixins.toolbar,
  justifyContent: 'space-between',
}));

// UI FUNCTION -----------------------
export default function MainNavBar(props) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = event => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const [sideNavOpen, setSideNavOpen] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setSideNavOpen({ ...sideNavOpen, [anchor]: open });
  };

  const list = anchor => (
    <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280 }} role="presentation">
      <DrawerHeader>
        <Typography variant="button" noWrap component="div" color="text.secondary">
          Main Menu
        </Typography>
        <IconButton color="text.secondary" onClick={toggleDrawer(anchor, false)} edge="start">
          <CloseIcon fontSize="medium" />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <Link
          to="/"
          style={{ textDecoration: 'none', color: 'inherit' }}
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <Typography variant="body1" component="div" color="text.primary.main">
                Home
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>
        {routersLinks.map(link => (
          <Link
            key={link.text.toString().toLocaleLowerCase()}
            to={'../' + link.text.toString().toLocaleLowerCase()}
            style={{ textDecoration: 'none', color: 'inherit' }}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <Typography variant="body1" component="div" color="text.primary.main">
                  {link.text}
                </Typography>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ alignItems: 'center' }}>
        {/* MENU ICON */}
        <Box sx={{ flexGrow: 0 }}>
          <div>
            {['left'].map(anchor => (
              <div key={anchor}>
                <IconButton color="inherit" onClick={toggleDrawer(anchor, true)} component="div" edge="start">
                  <MenuRoundedIcon sx={{ fontSize: '1.8rem' }} />
                </IconButton>
                <Drawer anchor={anchor} open={sideNavOpen[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </div>
            ))}
          </div>
        </Box>
        {/* ==================================== */}
        {/* BRAND */}
        <Box sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>{props.brand}</Box>
        {/* ====================================
        {/* USER */}
        <Box sx={{ flexGrow: 0 }}>
          <Button
            onClick={handleOpenUserMenu}
            sx={{
              color: '#f1f1f1',
              textTransform: 'none',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '0.2rem',
              border: '1px solid #1565c0',
            }}
            component="div"
          >
            <AccountCircleIcon sx={{ color: 'inherit', marginBottom: '0.2rem' }} />
            <Typography variant="body2" component="div" fontWeight="100">
              {props.userName}
            </Typography>
          </Button>
          <Menu
            sx={{ mt: '36px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <Typography
              variant="subtitle2"
              sx={{ color: '#9e9e9e', padding: '0.5rem 1rem' }}
              fontWeight="300"
              textAlign="left"
              component="div"
            >
              Logged-in as: <b>{props.userName}</b>
            </Typography>
            <Divider variant="middle" flexItem />
            {userOptions.map(option => (
              <Link
                key={option.text.toString().toLocaleLowerCase()}
                to={'../' + option.text.toString().toLocaleLowerCase()}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <MenuItem key={option.text} onClick={handleCloseUserMenu}>
                  <Typography
                    component="div"
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: '0.2rem',
                    }}
                  >
                    {option.icon} {option.text}
                  </Typography>
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </Box>
        {/* ==================================== */}
      </Toolbar>
    </AppBar>
  );
}
