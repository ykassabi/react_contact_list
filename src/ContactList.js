import React, {Component} from 'react';

export class ContactList extends Component {
render(){

    return (
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
    )
}
}

export default ContactList;