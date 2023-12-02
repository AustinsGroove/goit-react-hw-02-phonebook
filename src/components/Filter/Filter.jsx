import Wrapper from './Filter.styled';

const Filter = ({ filterChange, value }) => {
  return (
    <Wrapper>
      <label>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          value={value}
          onChange={filterChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></input>
      </label>
    </Wrapper>
  );
};

export default Filter;
