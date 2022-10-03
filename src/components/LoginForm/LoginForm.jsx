import { Section, Form } from './LoginForm.styled';

export function LoginForm() {
  return (
    <Section>
      <Form>
        <h2>Авторизация</h2>
        <h3>Введите логин и пароль</h3>
        <label>
          <input type="text" placeholder="Логин" />
        </label>
        <label>
          <input type="text" placeholder="Пароль" />
        </label>
      </Form>
    </Section>
  );
}
