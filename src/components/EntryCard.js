import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import '../css/EntryCard.css';

export default class EntryCard extends Component {
  render() {
    return (
      <div className="column col-4">
        <div className="card">
          <div className="card-image">
          </div>
          <div className="card-header">
            <div className="card-title h5">{moment(this.props.entry.createdAt).format('dd DD.MM')}</div>
            <div className="card-subtitle text-gray">
              <span className="label label-secondary label-rounded">
                Activity {this.props.entry.generalActivity}
              </span>
            </div>
          </div>
          <div className="card-body">
            <label className="form-switch">
              <input disabled checked={this.props.entry.generalPoop} type="checkbox" />
              <i className="form-icon"></i> pooped
            </label>
            <label className="form-switch">
              <input disabled checked={this.props.entry.generalBath} type="checkbox" />
              <i className="form-icon"></i> bathed
            </label>
            <p className="entry-card-text">{this.props.entry.generalComments}</p>
          </div>
          <div className="card-footer">
            <Link to={"/entries/" + this.props.entry.id} className="btn">View</Link>
          </div>
        </div>
      </div>
    );
  }


}