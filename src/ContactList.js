import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    }
    clearQuery = () => {
        this.updateQuery('')
    }

render(){
    const { query } = this.state;
    const { listAllContacts, onDelete } = this.props;

    const showingFilteredContacts = (query === '')?
        listAllContacts :
        listAllContacts.filter((c) => (
            c.name.toLowerCase().includes(query.toLowerCase())
        ));

        // console.log('>', typeof(showingFilteredContacts));
        // console.log('line 29', typeof(listAllContacts));
    return (
        <div className='list-contacts'>
            <div className='list-contacts-top'>
                <input 
                    type='text'
                    className='search-contacts'
                    placeholder='make a search'
                    value={query}
                    onChange={(event)=>this.updateQuery(event.target.value)}
                />
            </div>
            {showingFilteredContacts.length !== listAllContacts.length && (
                <div className='showing-contacts'>
                    <span>Now showing {listAllContacts.length} of {showingFilteredContacts.length}</span>
                    <button onClick={this.clearQuery}>Show all</button>
                </div>
            )}

        <ul className='contact-list'>

            {showingFilteredContacts.map(i=> (
            <li key={i.id} className='contact-list-item'>
                <div
                className='contact-avatar'
                style={{backgroundImage:`url(${i.avatarURL})`}}
                >
                </div>
                <div className='contact-details'>
                    <p>{i.name}</p>
                    <p>{i.handle}</p>
                </div>
                <button className="contact-remove" onClick={()=>onDelete(i)}>
                    Remove
                </button>
            </li>)
            )}
            
        </ul>
        </div>
    )
}
}
ContactList.propTypes = {
    onDelete : PropTypes.func.isRequired,
    listAllContacts: PropTypes.array.isRequired,
};

export default ContactList;