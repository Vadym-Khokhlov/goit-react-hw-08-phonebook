import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Harry Potter' },
      { id: 'id-2', name: 'Hermione Granger' },
      { id: 'id-3', name: 'Ronald Weasley' },
    ],
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler(data) {
    console.log(data);
  }

  render() {
    return (
      <>
        <h1>PhoneBook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <ContactList
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
