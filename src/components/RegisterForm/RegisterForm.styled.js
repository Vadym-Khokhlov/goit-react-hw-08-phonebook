import styled from 'styled-components';

export const RegisterBlock = styled.div`
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  width: 450px;
  background-color: silver;
  text-align: center;
  border: 2px solid black;
  //border-radius: 25px;
  background-color: silver;
  opacity: 0.9;
`;

export const RegisterTitle = styled.h2`
  font-size: 20px;
  color: darkslategrey;
`;

export const RegisterStyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const RegisterLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const RegisterInput = styled.input`
  background-color: floralwhite;
  height: 30px;
  border-radius: 10px;
  padding: 0 5px;
  font-family: serif;
  font-size: 20px;
`;

export const RegisterButton = styled.button`
  height: 30px;
  border-radius: 10px;
  font: inherit;
  padding-top: 3px;
`;
