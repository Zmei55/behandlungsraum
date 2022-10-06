import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { LoginForm } from 'components/LoginForm';
import { StaffUnit } from 'components/StaffUnit';
import { Section, Form, Title } from './AuthMenu.styled';

export function AuthMenu() {
  // const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    login: '',
    password: '',
    station: '',
  });

  // const handleSubmit = async event => {
  //   event.preventDefault();

  //   const user = await login(formState).unwrap(); // login - hook из redux.api
  //   dispatch(loginSuccess(user)); // loginSuccess из redux.slice

  //   setFormState('');
  // };

  return (
    <Section>
      <Form>
        <Title>Autorisierung</Title>
        {/* <LoginForm formState={formState} setFormState={setFormState} /> */}
        <StaffUnit formState={formState} setFormState={setFormState} />
      </Form>
    </Section>
  );
}
