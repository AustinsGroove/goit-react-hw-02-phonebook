import { Component } from 'react';
import { nanoid } from 'nanoid';
//
import InputForm from './InputForm/InputForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
//
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    this.setState(({ contacts: prevContacts }) => {
      const newContact = {
        id: nanoid(),
        name: contact.name,
        number: contact.number,
      };
      return {
        [`contacts`]: [...prevContacts, newContact],
      };
    });
  };

  removeContact = ({ target }) => {
    const removableId = target.id;
    const contacts = this.state.contacts;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== removableId),
    });
  };

  filterChange = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  renderFilteredContacts = () => {
    const contacts = this.state.contacts;
    const filter = this.state.filter;
    if (!filter) {
      return contacts;
    } else {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLocaleLowerCase())
      );
    }
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <InputForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter filterChange={this.filterChange} value={this.state.filter} />
        <ContactsList
          contacts={this.renderFilteredContacts()}
          removeContact={this.removeContact}
        />
      </>
    );
  }
}
