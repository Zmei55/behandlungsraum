import { Container, ModalBtn, IconServicesAdd } from './Services.styled';

export function Services() {
  return (
    <Container>
      <ModalBtn type="button" disabled>
        <IconServicesAdd />
        Добавить услуги
      </ModalBtn>
    </Container>
  );
}
