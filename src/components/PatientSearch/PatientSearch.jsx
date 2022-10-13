import { useState } from 'react';
import { Modal } from 'components/Modal';
import { PatientSearchModal } from 'components/PatientSearchModal';
import { PatientSearchList } from 'components/PatientSearchList';
import {
  Container,
  ModalBtn,
  IconSelectPatient,
  ModalContainer,
} from './PatientSearch.styled';

export function PatientSearch() {
  const [showModal, setShowModal] = useState(false);
  const [patients, setPatients] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <ModalBtn type="button" onClick={toggleModal} aria-label="find patient">
        <IconSelectPatient />
        Wählen Sie einen Patient aus
      </ModalBtn>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalContainer>
            <PatientSearchModal
              toggleModal={toggleModal}
              setPatients={setPatients}
            />

            {patients && <PatientSearchList patients={patients} />}
          </ModalContainer>
        </Modal>
      )}
    </Container>
  );
}
