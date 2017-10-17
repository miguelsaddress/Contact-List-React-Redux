import React, { Component } from 'react';
import {connect} from 'react-redux'

class ContactDetail extends Component {
	render() {
		if (!this.props.contact) {
			return (
				<div>Click one of the contacts to see details.</div>
			);
		}
		return (
			<div>
				<h4>Details for: {this.props.contact.name}</h4>
				<div>Phone: {this.props.contact.phone}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    contact: state.activeContact
  };
}

export default connect(mapStateToProps)(ContactDetail)
