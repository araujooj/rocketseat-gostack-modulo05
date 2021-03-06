import styled from 'styled-components';

export const Loading = styled.div`
color: #fff;
display: flex;
justify-content:center;
align-items:center;
height: 100vh;
font-weight: bold;
font-size: 30px;
`;

export const Owner = styled.div`
display: flex;
flex-direction: column;
align-items: center;

img {
  width: 120px;
  border-radius: 50%;
  margin-top: 20px;
}

h1 {
  font-size: 24px;
  margin-top: 10px;
}

p{
  margin-top: 5px;
  color: #666;
  font-size: 14px;
  text-align: center;
  line-height: 1.4;
  max-width: 400px;
}

a{
  color: #7159c1;
  text-decoration: none;
  font-size: 16px;
}
`

export const IssueList = styled.div`
padding-top: 30px;
margin-top: 30px;
border-top: 1px solid #eee;
list-style: none;

li {
  display: flex;
  padding: 15px 10px;
  border: 1px solid #eee;
  border-radius: 4px;
}

& + li {
  margin-top: 10px;
}

img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #eee;
}

div {
  flex: 1;
  margin-left: 15px;
}

strong {
  font-size: 16px;

  a{
    text-decoration: none;
    color : #333;

    &:hover {
      color: #7159c1
    }
  }
  span{
    background :#eee;
    color: #333;
    font-size: 12px;
    font-weight: 600;
    height: 20px;
    padding: 3px 4px;
    margin-left: 10px;
  }
  p {
    margin-top: 5px;
    font-size: 12px;
    color:#999
  }

}
`
export const Footer = styled.div`
padding-top: 10px;
margin: 15px 10px;
display: flex;
flex-direction:row;
justify-content: space-between;

button{
  background: transparent;
  border-color: transparent;
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
`

export const Filter = styled.div`
margin-right: 25px;
button {
  margin-left: 10px;
  margin-top: 15px;
  background: #7159c1;
  width: 75px;
  height: 25px;
  border-width: 0.5px;
  color: #fff;
  align-self: center;
  border-width:0;
}
`
