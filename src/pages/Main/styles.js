import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
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

export const Form = styled.form.attrs(props => ({
  disabled: props.error
}))`
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

  &[disabled] {
   input{
    border: 0.5px solid #c1002e
   }
  }

`;

const rotate = keyframes`
from {
  transform: rotate(0deg)
}

to {
  transform: rotate(360deg)
}
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border-color: transparent;
  margin-left: 10px;
  border-radius: 4px;
  padding: 0 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
list-style: none;
margin-top: 25px;

li{
  padding: 15px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    color: #7159c1;
    text-decoration: none;

  }

  & + li {
    border-top: 1px solid #eee
  }
}
`
