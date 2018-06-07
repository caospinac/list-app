import React, { Component } from 'react';
import request from 'superagent';

class App extends Component {

  constructor(props) {
    super(props)
    request
    .get('/backend/post')
    .then(res => {
      this.status  = {
        data: res
      }
      console.log(res);
    }, err => {
      console.log(err);
    });
  }


  handleClick = () => {
    var val = document.getElementById('in').value
    request
    .post('/backend/data')
    .send({"Name": val})
    .then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <input type="text" id="in"></input>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default App;
