import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Home from './pages/Home';

function App() {
  const theme = createMuiTheme({ //object theme
    palette: {
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#065fd4",
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;