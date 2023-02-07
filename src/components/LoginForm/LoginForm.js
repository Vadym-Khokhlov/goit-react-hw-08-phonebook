import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  LoginBlock,
  LoginStyledForm,
  LoginLabel,
  LoginInput,
  LoginButton,
} from './LoginForm.styled';
import { GiOwl, GiSkeletonKey } from 'react-icons/gi';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginBlock>
      <h2>Login</h2>
      <LoginStyledForm onSubmit={handleSubmit} autoComplete="off">
        <LoginLabel>
          <GiOwl size={25} />
          <LoginInput type="email" name="email" />
        </LoginLabel>
        <LoginLabel>
          <GiSkeletonKey size={25} />
          <LoginInput type="password" name="password" />
        </LoginLabel>
        <LoginButton type="submit">Log In</LoginButton>
      </LoginStyledForm>
    </LoginBlock>
  );
};
