import { NavLink } from 'react-router-dom';
import { AuthBar } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthBar>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </AuthBar>
  );
};
