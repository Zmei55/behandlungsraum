import { Link } from 'react-router-dom';
import {
  SubTitle,
  Container,
  Label,
  Input,
  Button,
  IconArrowRicht,
} from './LoginForm.styled';

export function LoginForm({ formState, setFormState }) {
  const handleChange = ({ target: { name, value } }) =>
    setFormState(prev => ({ ...prev, [name]: value }));

  const isEmptyForm =
    formState.login.length === 0 || formState.password.length === 0;

  return (
    <>
      <SubTitle>Geben Sie Login und Password ein</SubTitle>

      <Container>
        <Label>
          <Input
            name="login"
            type="text"
            placeholder="Login"
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </Label>
      </Container>

      <Link to="station">
        <Button type="button" disabled={isEmptyForm}>
          Weiter
          <IconArrowRicht />
        </Button>
      </Link>
    </>
  );
}
