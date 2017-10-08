import React, { Component } from 'react';
import LinePlot from './charts/LinePlot';
import { getEntries, parse } from '../util';
import _ from 'lodash';

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

    let activity = _.cloneDeep(data);

    getEntries().then((entries) => {
      data.columns.push(['Weight', ...parse(entries.data, "generalWeight")]);
      data.columns.push(['Length', ...parse(entries.data, "generalLength")]);
      activity.columns.push(['Activity', ...parse(entries.data, "generalActivity")])

      this.setState({
        data,
        activity
      });

    }).catch((error) => console.error(error))
  }

  componentWillMount() {
    this.getData();
  }

  render() {

    const activityAxis = {
      y: {
        tick: {
          values: [0, 1,2,3,4,5]
        }
    }
  }

    return (
      <div>
        <h1>Last 30 days in plots</h1>
        <h3> Length and weight </h3>
        <LinePlot data={this.state.data} />
        <h3>Activity</h3>
        <LinePlot data={this.state.activity} axis={activityAxis} />
      </div>
    );
  }
  }