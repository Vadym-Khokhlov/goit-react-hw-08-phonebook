import styled from 'styled-components';

export const LoginBlock = styled.div`
  padding: 10px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 250px;
  width: 450px;
  background-color: silver;
  text-align: center;
  border: 2px solid black;
  //border-radius: 25px;
  background-color: silver;
  opacity: 0.8;
`;

export const LoginStyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const LoginLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LoginInput = styled.input`
  background-color: floralwhite;
  height: 30px;
  border-radius: 10px;
  padding: 0 5px;
  font-family: serif;
  font-size: 20px;
`;

export const LoginButton = styled.button`
  height: 30px;
  border-radius: 10px;
  font: inherit;
  padding-top: 3px;
`;
