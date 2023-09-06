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
      <ListItemText primary="Dashboard" /> {/* Dashboard item text */}
      </ListItem>
        <ListItem button component={Link} to="/Projects">
          <ListItemIcon>
            <AssignmentIcon /> {/* Projects icon */}
          </ListItemIcon>
          <ListItemText primary="Projects" /> {/* Projects item text */}
        </ListItem>
        <ListItem button component={Link} to="/Modules">
          <ListItemIcon>
            <ExtensionIcon /> {/* Modules icon */}
          </ListItemIcon>
          <ListItemText primary="Modules" /> {/* Modules item text */}
        </ListItem>
        <ListItem button component={Link} to="/Sprints">
          <ListItemIcon>
            <ScheduleIcon /> {/* Sprints icon */}
          </ListItemIcon>
          <ListItemText primary="Sprints" /> {/* Sprints item text */}
        </ListItem>
        <ListItem button component={Link} to="/Members">
          <ListItemIcon>
            <GroupIcon /> {/* Members icon */}
          </ListItemIcon>
          <ListItemText primary="Members" /> {/* Members item text */}
        </ListItem>
        <ListItem button component={Link} to="/Reports">
          <ListItemIcon>
            <ReportIcon /> {/* Reports icon */}
          </ListItemIcon>
          <ListItemText primary="Reports" /> {/* Reports item text */}
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
// Export the Sidebar component as the default export

export default Sidebar;
