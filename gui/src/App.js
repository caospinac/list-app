import React, { Component } from 'react';
import request from 'superagent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    request
    .get('http://localhost:8000/data')
    .set('Accept', 'application/json')
    .then(res => {
      this.setState({
        data: res.body.data
      });
      console.log(res.body.data);
    })
    .catch(err => {
      console.log(err);
    });
  }

  handleSubmitClick = () => {
    var val = document.getElementById('in').value
    request
    .post('http://localhost:8000/data')
    .send({"Name": val})
    .then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <input type="text" id="in"></input>
        <button onClick={this.handleSubmitClick}>Submit</button>
        <ul>
          {
            data.map(r => (
              <li key={r._id}>
                {r.Name}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
