import React, { Component } from 'react';
import { getEntries } from '../util';
import EntryCard from './EntryCard';

export default class Entries extends Component {

  constructor(props) {
    super(props);
    
    this.state = {};

    this.createCardsView = this.createCardsView.bind(this);
  }

  componentWillMount() {
    getEntries().then((response) => {
      this.setState({
        entries: response.data
      })
    }).catch((error) => {
      console.error(error);
    });
  }

  createCardsView() {
    return (
      <div className="columns">
        {
          this.state.entries.map((entry) => {
            return (
              <EntryCard
                key={entry.createdAt}
                entry={entry}
              />
            )
          })
        }
      </div>
    );
  }


  render() {
    return (
      <div className="container grid-md">
        <h1> All your entries </h1>        
        { this.state.entries && this.createCardsView() }
      </div>
    );
  }
  }