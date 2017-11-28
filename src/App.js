import React, { Component } from 'react';
import './App.css';
import TopStories from './topStories'
import Jobs from './jobs'
import BottomNav from './bottomNav'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0
    }
  }
  updateToPage(state){
    this.setState({
      page: state
    }, () => {
      console.log(this.state)
    })
  }
  render() {
    var julez = null
    if(this.state.page === 0) {
      julez = <TopStories/>
    } else if (this.state.page === 1) {
      julez = <Jobs/>
    }
    else if (this.state.page === 2) {
      julez = <Jobs/>
    }


    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar title="Hacker News Clone"/>
        {julez}
        <BottomNav className='foo' pageController={(state)=> this.updateToPage(state)}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
