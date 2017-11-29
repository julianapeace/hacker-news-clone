import React, {Component} from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import './jobs.css';
const axios = require('axios')
class BestStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestStories: [],
    }
  }
  best_stories_api(){
    var story = this.state.bestStories;
    var that = this;
    axios.get('https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty')
    .then(function(resp){
      return resp.data.slice(0,5)
    })
    .then(function(array){
      array.forEach(function(element){
         axios.get('https://hacker-news.firebaseio.com/v0/item/'+ element +'.json?print=pretty')
         .then(resp=>{
           story.push({
             id: resp.data.id,
             title: resp.data.title,
             url: resp.data.url,
           });
           that.setState({
             bestStories: story
           })
        })
      })
    })
  }
  render() {
    return (
      <div>
      <Card className="md-card">
      <CardTitle title="Best Stories" subtitle=""/>
      <CardActions>
      <RaisedButton label="Get Best Stories" onClick= {() => this.best_stories_api()} primary={true}/>
      </CardActions>
      <CardText>
      {this.state.bestStories.map((story) =>
        <Card className="md-card" key={story.id}>
        <a href={story.url}>
          <CardTitle title={story.title} subtitle={story.id}/>
          </a>
          <CardText>
          </CardText>
        </Card>
      )}
      </CardText>
      </Card>
      </div>
    )}
}
export default BestStories;
