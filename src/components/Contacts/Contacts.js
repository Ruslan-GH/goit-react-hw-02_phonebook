import React from "react";
import { nanoid } from 'nanoid';
import s from './Contacts.module.css'

const Contacts = ({contacts, onDeleteContact}) => {
    return (
        <ul className={s.ContactList}>
            {contacts.map(contact => 
                <li key={nanoid()}  className={s.ContactList__item}>
                    <p>{contact.name}: {contact.number}</p>
                    <button 
                        className={s.ContactList__deleteBtn}
                        onClick={() => onDeleteContact(contact.id)}
                        >
                            Delete
                    </button>
                </li>)
            }
        </ul>
    )
}

export default Contacts;