import styled from 'styled-components';

export const ContactList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  //border-radius: 25px;
  width: 90%;
  height: auto;
  background-color: silver;
  color: #740001;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  list-style: none;
  padding: 10px 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 770px;
  height: auto;
  //border-radius: 25px;
  background-color: darkslategray;
  color: antiquewhite;
  padding: 10px 20px;
  font-family: inherit;
  font-size: 20px;
`;

export const ContactInfo = styled.div`
  margin-left: 20px;
  display: flex;
  gap: 20px;
`;

export const ContactInfoItem = styled.p`
  font-family: serif;
`;

export const RemoveButton = styled.button`
  margin-right: 20px;
  height: 30px;
  border: none;
  padding: 5px 5px;
  background-color: inherit;
  font-size: 20px;
  color: darkred;
  cursor: pointer;
`;
