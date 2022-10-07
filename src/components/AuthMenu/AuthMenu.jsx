import { Outlet } from 'react-router-dom';
import { Section, Form, Title } from './AuthMenu.styled';

export function AuthMenu() {
  return (
    <Section>
      <Form>
        <Title>Autorisierung</Title>
        <Outlet />
      </Form>
    </Section>
  );
}

// ==========================================

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { LoginForm } from 'components/LoginForm';
// import { StaffUnit } from 'components/StaffUnit';

// const dispatch = useDispatch();
// const [formState, setFormState] = useState({
//   login: '',
//   password: '',
//   station: '',
// });

// const handleSubmit = async event => {
//   event.preventDefault();

//   const user = await login(formState).unwrap(); // login - hook из redux.api
//   dispatch(loginSuccess(user)); // loginSuccess из redux.slice

//   setFormState('');
// };
