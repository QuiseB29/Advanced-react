// src/App.js
import React from 'react';
import { ContactProvider } from  './context/ContactContext';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import InventoryManagement from './components/InventoryManagement';



const App = () => {
  return (
    <ContactProvider>
      <div>
        <ContactList />
        <ContactDetails />
        <InventoryManagement />
        
      </div>
    </ContactProvider>

  );
};

export default App;
