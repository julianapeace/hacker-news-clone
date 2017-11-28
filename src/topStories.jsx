import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import './topStories.css';
const axios = require('axios')
class TopStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topStories: [],
    }
  }
  top_stories_api(){
    var story = this.state.topStories;
    var that = this;
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
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
             topStories: story
           })
        })
      })
    })
  }
  render() {
    this.top_stories_api()
    return (
      <div>
      <Card className="md-card">
      <CardTitle title="Top Stories" subtitle=""/>
      <CardActions>
      </CardActions>
      <CardText>
      {this.state.topStories.map((story) =>
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
export default TopStories;
