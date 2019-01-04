import React, { Component } from 'react';
import './App.css';
import jQuery from 'jquery';
// import Timer from './Timer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: []
    }
  }

  componentDidMount() {
    jQuery.ajax({
      type: 'GET',
      url: 'http://localhost:3001/appointments'
    }).done(data => {
      this.setState({ appointments: data })
    });
  }

  render() {
    return (
      <div className="App">
        {/* <h2><Timer /></h2> */}
        <p className="App-intro">
          {this.state.appointments.map(appointment => {
            return (<p>{appointment.title}</p>);
          })
          }
        </p>
      </div>
    );
  }
}

export default App;
