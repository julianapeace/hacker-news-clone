import React, { Component } from 'react';
import './App.css';
import TopStories from './topStories'
import BestStories from './bestStories'
import Jobs from './jobs'
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import BottomNav from './bottomNav'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Code from 'material-ui/svg-icons/action/code';
import Face from 'material-ui/svg-icons/action/face';
import Portfolio from 'material-ui/svg-icons/action/assignment-ind';
const codeIcon = <Code/>;
const faceIcon = <Face/>;
const portfolioIcon = <Portfolio/>;

const About = () =>(
  <div>
  <Card className="md-card">
  <CardTitle title="Hacker News Clone" subtitle="A Mobile Friendly Version"/>
  <CardText>
  <h2>Tech Stack</h2>
  <li>React</li>
  <li>Material UI</li>
  <li>Hacker News API</li>
  </CardText>
  <CardText>
  <h2>Challenges</h2>
  <p>Some challenges I faced were linking react components together. There's some sort of magic through passing data upstream via props.</p>
  <p>As a user, it's odd to click on links and not have the url change. That's react's magic however if I were to make it again, I'll definitely add a react router.</p>
  </CardText>
  <h3>Check out the github below if you're `code` curious! Or add me on linkedin and say hi!</h3>
  <CardActions>

  <RaisedButton href="https://github.com/julianapeace/hacker-news-clone" target="_blank" label="Github" primary={true} icon={codeIcon}/>

  <RaisedButton href="http://www.julianamei.com/" target="_blank" label="Portfolio" primary={true} icon={portfolioIcon}/>

  <RaisedButton href="https://www.linkedin.com/in/julianamei" target="_blank" label="LinkedIn" secondary={true} icon={faceIcon}/>

  </CardActions>

  </Card>
</div>
)

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
      julez = <BestStories/>
    }
    else if (this.state.page === 2) {
      julez = <Jobs/>
    }
    else if (this.state.page === 3) {
      julez = <About/>
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar title="Hacker News Clone"/>
        <BottomNav className="bottomNav" pageController={(state)=> this.updateToPage(state)}/>
        {julez}

      </MuiThemeProvider>
    );
  }
}

export default App;
