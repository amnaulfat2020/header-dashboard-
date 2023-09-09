import React from 'react';
import Header from '../Header';
import Sidebar from './Sidebar';
import { Grid } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Grid container>
        {/* Sidebar */}
        <Grid item>
          <Sidebar />
        </Grid>

        {/* Main content */}
        <Grid item xs>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;

