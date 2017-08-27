import React, { Component } from 'react';
import ActivitySlider from './ActivitySlider';
import '../css/NewEntry.css';
import { postEntry } from '../util';

export default class NewEntry extends Component {

  breakfastCrickets = null;
  breakfastVeggies = null;
  breakfastComments = null;
  dinnerCrickets = null;
  dinnerVeggies = null;
  dinnerComments = null;
  generalBath = null;
  generalLength = null;
  generalWeight = null;
  generalActivity = null;
  generalComments = null;
  generalPoop = null;
  
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.sliderOnChange = this.sliderOnChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const entry = {
      breakfastCrickets : this.breakfastCrickets.value,
      breakfastVeggies : this.breakfastVeggies.checked,
      breakfastComments : this.breakfastComments.value,
      dinnerCrickets : this.dinnerCrickets.value,
      dinnerVeggies : this.dinnerVeggies.checked,
      dinnerComments : this.dinnerComments.value,
      generalBath : this.generalBath.checked,
      generalLength : this.generalLength.value,
      generalWeight : this.generalWeight.value,
      generalActivity : this.generalActivity,
      generalComments : this.generalComments.value,
      generalPoop : this.generalPoop.checked
    };

    postEntry(entry)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  sliderOnChange(e) {
    this.generalActivity = e;
  }

  render() {
    return (
      <div className="container grid-sm">
        <h1>New Entry</h1>
        <form onSubmit={this.onSubmit} className="form-horizontal">
          <h4>Breakfast</h4>

          <div className="form-group">
            <div className="col-3">
              <label className="form-label">How many crickets did your beardie eat?</label>
            </div>
            <div className="col-9">
              <input ref={(e) => this.breakfastCrickets = e} className="form-input" type="number" placeholder="How many crickets?" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="breakfast-veggies" className="form-switch">
              <input id="breakfast-veggies" ref={(e) => this.breakfastVeggies = e} type="checkbox" />
              <i className="form-icon"></i> Did your beardie eat veggies?
            </label>
          </div>

          <div className="form-group">
            <div className="col-3">
              <label className="form-label">Additional comments</label>
            </div>
            <div className="col-9">
              <textarea ref={(e) => this.breakfastComments = e} className="form-input" placeholder="Additional comments" />
            </div>
          </div>

          <h4>Dinner</h4>
          <div className="form-group">
            <div className="col-3">
              <label className="form-label">How many crickets did your beardie eat?</label>
            </div>
            <div className="col-9">
              <input ref={(e) => this.dinnerCrickets = e} className="form-input" type="number" placeholder="How many crickets?" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="dinner-veggies" className="form-switch">
              <input id="dinner-veggies" ref={(e) => this.dinnerVeggies = e} type="checkbox" />
              <i className="form-icon"></i> Did your beardie eat veggies?
            </label>
          </div>

          <div className="form-group">
            <div className="col-3">
              <label className="form-label" >Additional comments</label>
            </div>
            <div className="col-9">
              <textarea ref={(e) => this.dinnerComments = e} className="form-input" placeholder="Additional comments" />
            </div>
          </div>

          <h4>General</h4>
          <div className="form-group">
            <label htmlFor="general-poop" className="form-switch">
              <input id="general-poop" ref={(e) => this.generalPoop = e} type="checkbox" />
              <i className="form-icon"></i> Did your beardy poop?
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="general-bath" className="form-switch">
              <input id="general-bath" ref={(e) => this.generalBath = e} type="checkbox" />
              <i className="form-icon"></i> Did your beardy get a bath?
            </label>
          </div>

          <div className="form-group">
            <div className="col-3">
              <label className="form-label">Activity</label>
            </div>
            <div className="col-9 align-center">
              <ActivitySlider
                onChange={this.sliderOnChange}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="col-3">
              <label className="form-label">Weight</label>
            </div>
            <div className="col-9">
              <input ref={(e) => this.generalWeight = e} className="form-input" type="decimal" placeholder="Weight (grams)" />
            </div>
          </div>

          <div className="form-group">
            <div className="col-3">
              <label className="form-label" >Length</label>
            </div>
            <div className="col-9">
              <input ref={(e) => this.generalLength = e} className="form-input" type="decimal" placeholder="Length (centimeters)" />
            </div>
          </div>

          <div className="form-group">
            <div className="col-3">
              <label className="form-label" >General comments</label>
            </div>
            <div className="col-9">
              <textarea ref={(e) => this.generalComments = e} className="form-input" placeholder="General comments" />
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}