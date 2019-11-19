import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ContactList extends Component {

    state={
        query: ''
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    }


render(){

    return (
        <div className='list-contacts'>
            <div className='list-contacts-top'>
                <input 
                    type='text'
                    className='search-contacts'
                    placeholder='make a search'
                    value={this.state.query}
                    onChange={(event)=>this.updateQuery(event.target.value)}
                />
            </div>
        <p>{this.state.query}</p>
        <ul className='contact-list'>
            {this.props.list.map(i=> (
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
                <button className="contact-remove" onClick={()=>this.props.onDelete(i)}>
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
    list: PropTypes.array.isRequired,
};

export default ContactList;