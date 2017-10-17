import React, {Component} from 'react'
import {connect} from 'react-redux'
import selectContact from '../actions/action_select_contact'
import {bindActionCreators} from 'redux'

class ContactList extends Component {
  renderList() {
    return this.props.contacts.map((contact) => {
      return (
        <li
        key={contact.phone}
        onClick={() => this.props.selectContact(contact)}
        className='list-group-item'>{contact.name}</li>
      );
    });
  }
  render() {
    return (
      <ul className = 'list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectContact: selectContact}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
