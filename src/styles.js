import styled from 'styled-components';

export const Form = styled.form`
* {
  margin: 5px;
  padding: 5px;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #f5f5f5;
  font: 16px sans-serif;
  color: #333;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

input {
  flex: 1;
  border: 2px solid chocolate;
  padding: 10px 30px;
  border-radius: 10px;
  font-size: 16px;
  flex-direction: column;
}

button {
  flex: 1;
  border: 2px solid chocolate;
  background-color: darkgrey;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 16px;
  flex-direction: column;
}

Header {
font-family: Verdana;
font-size: 30px;
font-weight: bolder;
font-style: oblique;
}

p1 {
font-family: 'Courier New';
font-size: 24px;
font-style: bolder, oblique;
}

span {
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
}
`;
