
import React from 'react';
import { useContactContext } from '../context/ContactContext';

const ContactDetails = () => {
  const { selectedContact } = useContactContext();

  if (!selectedContact) {
    return <div>Select a contact to see details.</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {selectedContact.name}</p>
      <p>Email: {selectedContact.email}</p>
    </div>
  );
};

export default ContactDetails;
