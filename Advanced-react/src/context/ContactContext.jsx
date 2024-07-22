
import React, { createContext, useState, useContext } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  ]);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => useContext(ContactContext);
