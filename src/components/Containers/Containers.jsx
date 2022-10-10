import { Container, ModalBtn, IconContainerAdd } from './Containers.styled';

export function Containers() {
  return (
    <Container>
      <ModalBtn type="button">
        <IconContainerAdd />
        Рассчитать контейнеры можно после добавления услуг
      </ModalBtn>
    </Container>
  );
}
