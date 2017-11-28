import React, {Component} from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
const axios = require('axios')
class TopStories extends Component {
  constructor(props) {
    super(props);
    var topStories = localStorage.topStories || '[]';
    topStories = JSON.parse(topStories);

    this.state = {
      topStories: topStories,
    }
  }
  top_stories_api(){
    let topStories = this.state.topStories;
    var r = axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    r.then(function(resp){
      return resp.data.slice(0,5)
    })
    .then(function(array){
      array.forEach(function(element){
         axios.get('https://hacker-news.firebaseio.com/v0/item/'+ element +'.json?print=pretty')
         .then(resp=>{
           topStories.push({
             id: resp.data.id,
             title: resp.data.title,
             url: resp.data.url,
           });
           localStorage.setItem('topStories', JSON.stringify(topStories));
        })
      })
    })
  }
  render() {
    localStorage.clear();
    return (
      <div>
      <h1>Top Stories</h1>
      <button onClick={this.top_stories_api()}>Get Top Stories</button>
      {this.state.topStories.map((story) =>
        <Card className="md-card">
          <CardTitle title={story.title} subtitle={story.id}/>
          <CardText>
          <p key={story.id}>
            <a href={story.url}>
            {story.title}
            </a>
          </p>
          </CardText>
        </Card>
      )}
      </div>
    )}
}
export default TopStories;
