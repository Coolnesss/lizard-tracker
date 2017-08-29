import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class EntryCard extends Component {
  render() {
    return (
      <div className="column col-4">
        <div className="card">
          <div className="card-image">
          </div>
          <div className="card-header">
            <div className="card-title h5">{moment(this.props.entry.createdAt).format('dd DD.MM')}</div>
            <div className="card-subtitle text-gray"></div>
          </div>
          <div className="card-body">
            {this.props.entry.generalComments}
          </div>
          <div className="card-footer">
            <Link to={"/entries/" + this.props.entry.id} className="btn">View</Link>
          </div>
        </div>
      </div>
    );
  }


}