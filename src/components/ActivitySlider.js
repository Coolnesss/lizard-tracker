import Slider from 'rc-slider';
import React, { Component } from 'react';
import 'rc-slider/assets/index.css';

export default class ActivitySlider extends Component {
  
  render() {
    return (
      <Slider
        step={1}
        max={5}
        min={0}
        marks={{0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5"}}
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  }


}
