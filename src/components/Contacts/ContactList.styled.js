import styled from 'styled-components';

export const ContactList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
  width: 60%;
  height: auto;
  background-color: silver;
  color: #740001;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  gap: 20px;
  list-style: none;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96%;
  height: auto;
  border-radius: 25px;
  background-color: darkslategray;
  color: antiquewhite;
`;

export const ContactInfo = styled.div`
  margin-left: 20px;
`;

export const RemoveButton = styled.button`
  margin-right: 20px;
  height: 30px;
  border-radius: 10px;
  background-color: floralwhite;
  font-size: 20px;
  color: darkred;
`;
