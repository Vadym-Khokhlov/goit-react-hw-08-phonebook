import { useAuth } from '../hooks';
import {
  Homepage,
  HomepageMessage,
  HomepageLoggedMessage,
} from 'components/App.styled';

export function HomeView() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    <Homepage>
      <HomepageLoggedMessage>welcome back</HomepageLoggedMessage>
    </Homepage>
  ) : (
    <>
      <HomepageMessage>There's a phonebook</HomepageMessage>
      <HomepageMessage>Log in or register for using </HomepageMessage>
    </>
  );
}
