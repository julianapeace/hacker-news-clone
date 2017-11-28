import React, { Component } from 'react';
import './App.css';
import TopStories from './topStories'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey400} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
const theme = getMuiTheme({
  fontFamily:'Roboto, Titillium Web, sans-serif',
  palette: {
    primary1Color: grey400,
  }
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <AppBar title="Hacker News Clone"/>
        <TopStories/>
      </MuiThemeProvider>
    );
  }
}

export default App;
