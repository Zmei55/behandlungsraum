import { Container, ModalBtn, IconServicesAdd } from './Services.styled';

export function Services() {
  return (
    <Container>
      <ModalBtn type="button">
        <IconServicesAdd />
        Добавить услуги
      </ModalBtn>
    </Container>
  );
}
