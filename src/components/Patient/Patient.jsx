import { Container, ModalBtn, IconSelectPatient } from './Patient.styled';

export function Patient() {
  return (
    <Container>
      <ModalBtn type="button">
        <IconSelectPatient />
        Выбрать пациента
      </ModalBtn>
    </Container>
  );
}
