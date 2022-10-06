import {
  Section,
  Form,
  Title,
  SubTitle,
  Container,
  Label,
  Input,
  Button,
  IconArrowRicht,
} from './LoginForm.styled';

export function LoginForm() {
  return (
    <Section>
      <Form>
        <Title>Autorisierung</Title>
        <SubTitle>Geben Sie Login und Password ein</SubTitle>

        <Container>
          <Label>
            <Input type="text" placeholder="Login" />
          </Label>

          <Label>
            <Input type="text" placeholder="Password" />
          </Label>
        </Container>

        <Button>
          Weiter
          <IconArrowRicht />
        </Button>
      </Form>
    </Section>
  );
}
