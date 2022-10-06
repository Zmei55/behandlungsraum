import { useState } from 'react';
import { LoginForm } from 'components/LoginForm';
import { Section, Form, Title } from './AuthMenu.styled';

export function AuthMenu() {
  const [formState, setFormState] = useState({
    login: '',
    password: '',
  });

  return (
    <Section>
      <Form>
        <Title>Autorisierung</Title>
        <LoginForm formState={formState} setFormState={setFormState} />
      </Form>
    </Section>
  );
}
