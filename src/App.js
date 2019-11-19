import React, { Component } from 'react';
import ContactList from './ContactList';

class App extends Component {
  state= {
    contacts: [{
      "id": "karen",
      "name": "Karen Isgrigg",
      "handle": "karen_isgrigg",
      "avatarURL": "http://localhost:5001/karen.jpg"
    },
    {
      "id": "richard",
      "name": "Richard Kalehoff",
      "handle": "richardkalehoff",
      "avatarURL": "http://localhost:5001/richard.jpg"
    },
    {
      "id": "tyler",
      "name": "Tyler McGinnis",
      "handle": "tylermcginnis",
      "avatarURL": "http://localhost:5001/tyler.jpg"
    }
    ]
  }
  // removeContact= (contact) => {
  //   this.setState((prevState)=>{
  //     contacts : prevState.contacts.filter( c => c.id !== c.contact )

  //   })
  // }
    removeContact = (contact) => {
        this.setState((currentState) => ({

                contacts: currentState.contacts.filter((c) => {
                  return c.id !== contact.id})
        }))

  }


  render() {
    return (
      <div>
        <ContactList 
        list={this.state.contacts}
        onDelete = {this.removeContact}
        />

      </div>
    );
  }
}

export default App;


