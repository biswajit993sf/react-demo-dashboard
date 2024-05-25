import React from 'react';
import PageRender from './Components/PageRender/PageRender';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Theme from './theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <PageRender />
    </ThemeProvider>
  );
}

export default App;