import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#113636',
    },
  },
})

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)

export default ThemeWrapper