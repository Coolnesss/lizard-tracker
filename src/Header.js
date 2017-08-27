import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="navbar">
        <section className="navbar-section">
          <a href="/" className="btn btn-link">Home</a>
          <a href="/entries" className="btn btn-link">Entries</a>
          <a href="/new_entry" className="btn btn-link">New Entry</a>
        </section>
        <section className="navbar-center">
        </section>
        <section className="navbar-section">
        </section>
      </header>
    );
  }
}