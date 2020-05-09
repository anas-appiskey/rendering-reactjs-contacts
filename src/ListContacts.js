import React from 'react';

function ListContacts (props){
    const contacts = props.contacts
    return(
        <ol className='contact-list'>

        
            {contacts.map((contact)=>(
            <li key={contact.id} className='contact-list-item' >
                
                <div 
                className='contact-avatar'
                style={{
                    backgroundImage :`url(${contact.avatarURL})`
                }}
                 >
                </div>
                <div className ='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.handle}</p>
                </div>
                <button className='contact-remove'>
                    button
                </button>
             </li>
            ))
            }
        </ol>
    );

}

export default ListContacts;