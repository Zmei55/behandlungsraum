import { useState } from 'react';
import { Modal } from 'components/Modal';
import { Container, ModalBtn, IconSelectPatient } from './Patient.styled';

export function Patient() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <ModalBtn type="button" onClick={toggleModal} aria-label="find patient">
        <IconSelectPatient />
        Выбрать пациента
      </ModalBtn>

      {showModal && <Modal onClose={toggleModal}></Modal>}
    </Container>
  );
}
