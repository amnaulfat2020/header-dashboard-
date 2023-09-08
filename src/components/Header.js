import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase'; // Import InputBase for the search bar
import logo from '../Assets/logo.png'; // Assuming the "Assets" folder is one level up from the component folder

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent' }}>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        {/* Project Logo */}
        <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />

        {/* Project Title */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            font: 'Roboto',
            fontSize: '24px',
            fontWeight: 500,
            lineHeight: '28px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#3C557A',
          }}
        >
          Projects
        </Typography>

        {/* Centered Search Bar and Icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '400px', // Adjust the width to your desired length
            height: '48px',
            borderRadius: '8px',
            backgroundColor: '#F1F2F7',
          }}
        >
          <InputBase
            placeholder="Search"
            startAdornment={
              <IconButton>
                <SearchIcon />
              </IconButton>
            }
            style={{ width: '100%' }}
          />
        </div>

        {/* Icons and User Info */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
          <div style={{ marginLeft: '10px' }}>
            <Typography variant="body2" sx={{ color: '#25364F' }}>Amna</Typography>
            <Typography variant="body2" sx={{ color: '#25364F' }}>Amna@gmail.com</Typography>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;