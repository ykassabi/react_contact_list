import React, { Component } from 'react';
import ContactList from './ContactList';
import * as ContactAPI from './utils/ContactsAPI'

class App extends Component {
  state= {
    contacts: []  
  }


  removeContact = (contact) => {
    this.setState((currentState) => ({
        contacts: currentState.contacts.filter((c) => {
                              return c.id !== contact.id
        })
    }))
    ContactAPI.remove(contact)
  }

componentDidMount(){
  ContactAPI.getAll()
  .then((contacts)=>{
    this.setState(()=>({ 
      contacts
    }))})
}

  render() {
    return (
      <div>
        <ContactList 
        listAllContacts={this.state.contacts}
        onDelete = {this.removeContact}
        />

      </div>
    );
  }
}

export default App;


