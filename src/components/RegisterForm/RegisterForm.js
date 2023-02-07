import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { GiOwl, GiSkeletonKey } from 'react-icons/gi';
import { FaBroom } from 'react-icons/fa';

import {
  RegisterBlock,
  RegisterTitle,
  RegisterInput,
  RegisterStyledForm,
  RegisterLabel,
  RegisterButton,
} from './RegisterForm.styled';
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <RegisterBlock>
      <RegisterTitle>Registration</RegisterTitle>
      <RegisterStyledForm onSubmit={handleSubmit} autoComplete="off">
        <RegisterLabel>
          <FaBroom size={25} />
          <RegisterInput type="text" name="name" placeholder="Username" />
        </RegisterLabel>
        <RegisterLabel>
          <GiOwl size={25} />
          <RegisterInput
            type="email"
            name="email"
            placeholder="owl@gmail.com"
          />
        </RegisterLabel>
        <RegisterLabel>
          <GiSkeletonKey size={25} />
          <RegisterInput
            type="password"
            name="password"
            placeholder="password"
          />
        </RegisterLabel>
        <RegisterButton type="submit">Register</RegisterButton>
      </RegisterStyledForm>
    </RegisterBlock>
  );
};
