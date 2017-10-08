import React, { Component } from 'react';
import LinePlot from './charts/LinePlot';
import { getEntries, parse } from '../util';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {}

    this.getData = this.getData.bind(this);
  }

  getData() {
    let data = {
      columns: []
    };

    getEntries().then((entries) => {
      data.columns.push(['Weight', ...parse(entries.data, "generalWeight")]);
      data.columns.push(['Length', ...parse(entries.data, "generalLength")]);
      
      this.setState({
        data
      });

    }).catch((error) => console.error(error))
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <div>
        <h1>Last 30 days in plots</h1>
        <LinePlot data={this.state.data} />
      </div>
    );
  }
  }