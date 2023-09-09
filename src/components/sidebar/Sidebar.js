// Import necessary components and icons from MUI (Material-UI) library
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link component
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExtensionIcon from '@mui/icons-material/Extension';
import ScheduleIcon from '@mui/icons-material/Schedule';
import GroupIcon from '@mui/icons-material/Group';
import ReportIcon from '@mui/icons-material/Report';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import logo from '../../Assets/logo.png';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import sidebarStyles from '../../styles/sidebarStyles'; 

// Define a functional component named Sidebar
const Sidebar = () => {
 // Component's return statement  
  return (
// Use a Drawer component from MUI for a permanent sidebar
<Drawer variant="permanent" anchor="left">
{/* Top section */}
<div style={sidebarStyles.logoContainer}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src={logo} alt="Logo" style={sidebarStyles.logo} />
    <Typography variant="h6" style={sidebarStyles.title}>
      Task Trek
    </Typography>
    <FormatIndentDecreaseIcon style={sidebarStyles.indentIcon} /> {/* New icon */}

  </div>
</div>
      {/* List of items for the sidebar navigation */}
      <List>
      <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
      <DashboardIcon /> {/* Dashboard icon */}
      </ListItemIcon>
      <ListItemText primary="Dashboard" /> 
      </ListItem>
        <ListItem button component={Link} to="/Projects">
          <ListItemIcon>
            <AssignmentIcon /> 
          </ListItemIcon>
          <ListItemText primary="Projects" /> 
        </ListItem>
        <ListItem button component={Link} to="/Modules">
          <ListItemIcon>
            <ExtensionIcon /> 
          </ListItemIcon>
          <ListItemText primary="Modules" /> 
        </ListItem>
        <ListItem button component={Link} to="/Sprints">
          <ListItemIcon>
            <ScheduleIcon />
          </ListItemIcon>
          <ListItemText primary="Sprints" /> 
        </ListItem>
        <ListItem button component={Link} to="/Members">
          <ListItemIcon>
            <GroupIcon /> 
          </ListItemIcon>
          <ListItemText primary="Members" /> 
        </ListItem>
        <ListItem button component={Link} to="/Reports">
          <ListItemIcon>
            <ReportIcon /> 
          </ListItemIcon>
          <ListItemText primary="Reports" /> 
        </ListItem>
      </List>
{/* Container for the logout button at the bottom */}

      <div style={sidebarStyles.logoutButtonContainer}>
{/* Display the logout button */}
      <Button startIcon={<ExitToAppIcon />} >
          Logout
        </Button>
      </div>
    </Drawer>
  );
};

export default Sidebar;
