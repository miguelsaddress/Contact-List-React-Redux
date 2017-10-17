import React, { Component } from 'react';
import ContactList from '../containers/contact-list'
import ContactDetail from '../containers/contact-detail'

export default class App extends Component {
  render() {
    return (
      <div>
      	<ContactList />
      	<ContactDetail />
      </div>
    );
  }
}
