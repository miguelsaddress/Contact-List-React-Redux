function selectContact(contact) {
  return {
    type: 'CONTACT_SELECTED',
    payload: contact
  }
}
export default selectContact;
