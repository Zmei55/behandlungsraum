import { useState } from 'react';
import { Modal } from 'components/Modal';
import {
  Container,
  ModalBtn,
  ButtonContainer,
  ResetBtn,
  FindBtn,
  CloseBtn,
  IconCross,
  IconSelectPatient,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  Form,
  Label,
  NameInput,
  BirthDayInput,
  MedicalCardInput,
} from './Patient.styled';

export function Patient() {
  const [showModal, setShowModal] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    birthday: '',
    cardNumber: '',
  });

  console.log(formState);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = ({ target: { name, value } }) =>
    setFormState(prev => ({ ...prev, [name]: value }));

  return (
    <Container>
      <ModalBtn type="button" onClick={toggleModal} aria-label="find patient">
        <IconSelectPatient />
        Wählen Sie einen Patient aus
      </ModalBtn>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>Wählen Sie einen Patient aus</ModalTitle>

              <ButtonContainer>
                <ResetBtn>Reset</ResetBtn>

                <FindBtn>Find</FindBtn>

                <CloseBtn onClick={toggleModal}>
                  <IconCross />
                </CloseBtn>
              </ButtonContainer>
            </ModalHeader>

            <Form>
              <Label>
                <NameInput
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Name"
                />
              </Label>

              <Label>
                <BirthDayInput
                  type="text"
                  name="birthday"
                  onChange={handleChange}
                  placeholder="Date of Birth"
                />
              </Label>

              <Label>
                <MedicalCardInput
                  type="text"
                  name="cardNumber"
                  onChange={handleChange}
                  placeholder="Card number"
                />
              </Label>
            </Form>
          </ModalContainer>
        </Modal>
      )}
    </Container>
  );
}
