import Wrapper from './Contact.styled';

const Contact = ({ name, number, id, removeContact }) => {
  return (
    <Wrapper>
      <p>{name}:</p>
      <p>{number}</p>
      <button type="button" id={id} onClick={removeContact}>
        Delete
      </button>
    </Wrapper>
  );
};

export default Contact;
