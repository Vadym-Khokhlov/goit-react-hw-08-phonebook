import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { UserBlock, LogoutButton, UserMessage } from './UserMenu.styled';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <UserBlock>
        <UserMessage>Hello, {user.name}</UserMessage>
        <LogoutButton type="button" onClick={() => dispatch(logOut())}>
          Logout
        </LogoutButton>
      </UserBlock>
    </>
  );
};
