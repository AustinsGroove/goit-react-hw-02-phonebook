import Contact from 'components/Contact/Contact';

import Wrapper from './ContactsList.styled';

const ContactsList = ({ contacts, removeContact }) => {
  return (
    <Wrapper>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <Contact
                name={name}
                number={number}
                id={id}
                removeContact={removeContact}
              />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default ContactsList;
