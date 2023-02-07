import { Outlet } from 'react-router-dom';
//import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { AppHeading, Container } from './App.styled';

export const Layout = () => {
  return (
    <Container>
      <AppHeading>Magic Phonebook</AppHeading>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </Container>
  );
};
