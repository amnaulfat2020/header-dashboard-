import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'; // Import Routes instead of Switch
import Layout from './components/sidebar/Layout';
import Dashboard from './Pages/Dashboard'; // Import other view components

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout />
        <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Define your routes using the Route component */}
          {/* Add other routes for different views */}
          {/* <Route path="/projects" component={Projects} />
          <Route path="/modules" component={Modules} />
          <Route path="/sprints" component={Sprints} />
          <Route path="/members" component={Members} />
          <Route path="/reports" component={Reports} /> */}
       </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;
