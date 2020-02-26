import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    align-items: center;
    display: flex;
    flex-direction: row;

    svg {
      margin-right: 12px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1.5px solid #eee;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 16px;
  }
`;

export default Container;
