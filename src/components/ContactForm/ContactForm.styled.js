import styled from 'styled-components';

export const Form = styled.form`
  margin-left: 40px;
  margin-right: 40px;
  border: 2px solid darkslategra y;
  //border-radius: 25px;
  width: auto;
  height: 250px;
  background-color: silver;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  color: darkslategrey;
`;

export const Input = styled.input`
  width: 160px;
  height: 30px;
  border-radius: 10px;
  background-color: floralwhite;
  font-family: serif;
  font-size: 16px;
`;

export const AddButton = styled.button`
  height: 35px;
  border-radius: 10px;
  background-color: floralwhite;
  font-size: 20px;
  display: flex;
  color: green;
  font: inherit;
  padding-top: 5px;
`;
