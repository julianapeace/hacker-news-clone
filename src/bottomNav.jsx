import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Domain from 'material-ui/svg-icons/social/domain';
import Reader from 'material-ui/svg-icons/action/chrome-reader-mode';
import Filter from 'material-ui/svg-icons/image/filter-tilt-shift';
import Face from 'material-ui/svg-icons/action/face';

const domainIcon = <Domain/>;
const readerIcon = <Reader/>;
const filterIcon = <Filter/>;
const faceIcon = <Face/>;

class BottomNav extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index}, ()=>{this.props.pageController(this.state.selectedIndex)}); //this function sets the state

  render() {
    return (
      <Paper zDepth={2}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Top Stories"
            icon={filterIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Best Stories"
            icon={readerIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Jobs"
            icon={domainIcon}
            onClick={() => this.select(2)}
          />
          <BottomNavigationItem
            label="Created By Juliana"
            icon={faceIcon}
            onClick={() => this.select(3)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNav;
