import React, { Component } from 'react';
import ContactList from './ContactList';
import * as ContactAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import {Route} from 'react-router-dom';

class App extends Component {
  state= {
    contacts: [],
  }


  removeContact = (contact) => {
    this.setState((currentState) => ({
        contacts: currentState.contacts.filter((c) => {
                              return c.id !== contact.id
        })
    }))
    ContactAPI.remove(contact)
  }

CreateContact = (contact) => {
  ContactAPI.create(contact)
  .then((contact)=>{
    this.setState((currentState)=>({
      contacts:currentState.contacts.concat([contact])
    }))
  })
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
        <Route exact path='/' render={()=>(
          <ContactList 
                listAllContacts={this.state.contacts}
                onDelete = {this.removeContact}
          />
        )}/>
        {/* <Route path='/new' render={()=>(<CreateContact/>)}
        /> */}
        <Route path='/new' render={({history})=><CreateContact
          onCreateContact={(contact)=>{
            this.CreateContact(contact)
            history.push('/')
          }}
        />} />
      </div>
    );
  }
}

export default App;


