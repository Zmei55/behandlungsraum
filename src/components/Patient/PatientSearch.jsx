import { useState } from 'react';
import { Modal } from 'components/Modal';
import * as patientsAPI from 'service/patients-api';
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
  PatientsList,
  PatientsListItem,
  PatientsName,
  BirthDay,
  CardNumber,
  SelectBtn,
} from './PatientSearch.styled';

export function PatientSearch() {
  const [showModal, setShowModal] = useState(false);
  const [patients, setPatients] = useState([]);
  const [formState, setFormState] = useState({
    name: '',
    birthday: '',
    cardNumber: '',
  });

  console.log(formState);
  console.log(patients);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleChange = ({ target: { name, value } }) =>
    setFormState(prev => ({ ...prev, [name]: value }));

  const handlePatientFind = () => {
    patientsAPI.fetchPatients().then(setPatients);
  };

  const handleResetPatientsList = () => {
    setPatients([]);
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
            <ModalHeader>
              <ModalTitle>Wählen Sie einen Patient aus</ModalTitle>

              <ButtonContainer>
                <ResetBtn onClick={handleResetPatientsList}>Reset</ResetBtn>

                <FindBtn onClick={handlePatientFind}>Find</FindBtn>

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
                  type="date"
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

            {patients && (
              <PatientsList>
                {patients.map(patient => (
                  <PatientsListItem key={patient.id}>
                    <PatientsName>{patient.name}</PatientsName>
                    <BirthDay>{patient.birthDate}</BirthDay>
                    <CardNumber>{patient.cardNumber}</CardNumber>
                    <SelectBtn>Select</SelectBtn>
                  </PatientsListItem>
                ))}
              </PatientsList>
            )}
          </ModalContainer>
        </Modal>
      )}
    </Container>
  );
}
