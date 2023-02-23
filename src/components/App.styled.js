import styled from 'styled-components';

export const AppHeading = styled.h1`
  text-align: center;
  color: darkslategrey;
  font-size: 50px;
`;

export const SectionHeading = styled.h2`
  text-align: center;
  color: darkslategrey;
  font-size: 30px;
`;

export const Container = styled.div`
  padding: 10px 20px;
  min-height: 'calc(100vh - 20px)';
  display: 'flex';
  align-items: 'center';
  justify-content: 'center';
  background-color: antiquewhite;
  opacity: 0.9;
  border: 3px solid silver;
  border-top: none;
  border-radius: 0 0 25px 25px;
  margin-left: auto;
  margin-right: auto;
  min-width: 'calc(100vh - 20px)';
  max-width: 900px;
`;

export const Homepage = styled.section`
  height: 650px;
  width: auto;
  opacity: 0.8;
`;

export const HomepageMessage = styled.p`
  color: darkslategrey;
  font-size: 40px;
  text-align: center;
  padding-top: 20px;
`;

export const HomepageLoggedMessage = styled.p`
  color: floralwhite;
  font-size: 40px;
  text-align: center;
  padding-top: 20px;
`;
