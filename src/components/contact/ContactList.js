import React from 'react';
import ContactElement from './ContactElement';

const ContactList = ({contactList}) => {
    if(contactList.length===0){
        return (
            <h2 class="ui center aligned icon header">
                 <i class="circular map outline icon"></i>
                    No Contacts Exists
            </h2>
        )
    }

    const list = contactList.map((contact) => {
        return (
                <ContactElement key = {contact._id} data = {contact} /> 
        )
    })

    return (
        <div class="ui three column grid container">
           {list}
        </div>
    )
}

export default ContactList;