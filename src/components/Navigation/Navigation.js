import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { NavBar } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavBar>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </NavBar>
  );
};
