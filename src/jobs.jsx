import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import './jobs.css';
const axios = require('axios')
class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    }
  }
  job_api(){
    var job = this.state.jobs;
    var that = this;
    axios.get('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty')
    .then(function(resp){
      return resp.data.slice(0,5)
    })
    .then(function(array){
      array.forEach(function(element){
         axios.get('https://hacker-news.firebaseio.com/v0/item/'+ element +'.json?print=pretty')
         .then(resp=>{
           job.push({
             id: resp.data.id,
             title: resp.data.title,
             text: resp.data.text,
             url: resp.data.url,
           });
           that.setState({
             jobs: job
           })
        })
      })
    })
  }
  render() {
    return (
      <div>
      <Card className="md-card">
      <CardTitle title="Jobs" subtitle=""/>
      <CardActions>
      {this.job_api()}
      </CardActions>
      <CardText>
      {this.state.jobs.map((story) =>
        <Card className="md-card" key={story.id}>
        <a href={story.url}>
          <CardTitle title={story.title} subtitle={story.id}/>
          </a>
          <CardText>
          <p>{story.text}</p>
          </CardText>
        </Card>
      )}
      </CardText>
      </Card>
      </div>
    )}
}
export default Jobs;
