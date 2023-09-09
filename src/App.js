import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'; // Import Routes instead of Switch
import Layout from './components/sidebar/Layout';

// Import your page components here
import Dashboard from './Pages/Dashboard'; // Import other view components
import Projects from './Pages/Projects';
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout />
        <Routes>
        <Route path="/" element={<Dashboard />} />      
        <Route path="/projects" component={Projects} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;