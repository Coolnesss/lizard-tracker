import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Entries from './components/Entries';
import NewEntry from './components/NewEntry';

export default class Main extends Component {
    render() {
      return (
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/entries' component={Entries} />
            <Route path='/new_entry' component={NewEntry} />
          </Switch>
        </main>
      );
    }
  }