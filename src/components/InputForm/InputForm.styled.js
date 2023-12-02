import styled from 'styled-components';

const Wrapper = styled('div')(() => {
  return {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    width: 300,
    borderRadius: 10,
    form: {
      padding: 10,
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
      alignItems: 'center',
      gap: 5,
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
    },
    input: {
      borderRadius: 10,
      padding: 5,
      borderColor: 'transparent',
    },
    button: {
      width: 170,
      margin: 10,
      borderRadius: 10,
      padding: 5,
      borderColor: 'transparent',
    },
  };
});

export default Wrapper;
