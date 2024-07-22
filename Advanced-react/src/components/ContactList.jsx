import React from 'react';
import { useContactContext } from '../context/ContactContext';

const ContactList = () => {
  const { contacts, setSelectedContact } = useContactContext();

  const contactItemStyle = {
    cursor: 'pointer', 
  };

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li
            key={contact.id}
            style={contactItemStyle} 
            onClick={() => setSelectedContact(contact)}
          >
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

