import React, { Component } from 'react';
import request from 'superagent';

class App extends Component {


  handleClick = () => {
    var val = document.getElementById('in').value
    request.open('POST', 'http://localhost/backend/post', true);
    request
    .open('GET', 'http://localhost/backend/post', true)
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
