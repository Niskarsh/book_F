import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import { orange, yellow, lightBlue, grey } from '@material-ui/core/colors'
import App from './app'
import store from './redux/store'
import './index.css'
// require('dotenv').config()

const theme = createMuiTheme({
    palette: {
      primary: {
        light: orange[200],
        main: '#fff',
        dark: orange[700],
      },
      secondary: {
        light: yellow[50],
        main: grey[800],
        dark: yellow[300],
      },
    },
    typography: {
        fontFamily: '"Open Sans Condensed", sans-serif'
    }
  })

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline />
                <App />
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'))


