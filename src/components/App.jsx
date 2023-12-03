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
    const existNames = this.state.contacts.map(({ name }) => {
      return name.toLowerCase();
    });
    const isExist = existNames.includes(contact.name.toLowerCase());
    if (isExist) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => {
      return {
        contacts: [
          ...contacts,
          {
            id: nanoid(),
            name: contact.name,
            number: contact.number,
          },
        ],
      };
    });
  };

  removeContact = ({ target }) => {
    const removableId = target.id;
    this.setState({
      contacts: this.state.contacts.filter(
        contact => contact.id !== removableId
      ),
    });
  };

  filterChange = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  renderFilteredContacts = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLocaleLowerCase())
    );
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <InputForm addContact={this.addContact} />
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
