import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';

export default class LinePlot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.data) {
      return <div>Loading...</div>
    }
    const axisSettings = {
        y: {
          max: 50,
          min: 0
      }
    }
    return (

      <C3Chart data={this.props.data} axis={axisSettings} />
    );
  }

}