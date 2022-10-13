import { useState } from 'react';
import db from 'data/db.json';
// import * as patientsAPI from 'service/patients-api';
import {
  ModalHeader,
  ModalTitle,
  ButtonContainer,
  ResetBtn,
  FindBtn,
  CloseBtn,
  IconCross,
  Form,
  Label,
  NameInput,
  BirthDayInput,
  MedicalCardInput,
} from './PatientSearchModal.styled';

export function PatientSearchModal({ toggleModal, setPatients }) {
  const [formState, setFormState] = useState({
    name: '',
    birthday: '',
    cardNumber: '',
  });

  console.log(formState);

  const handleChange = ({ target: { name, value } }) =>
    setFormState(prev => ({ ...prev, [name]: value }));

  // const handlePatientFind = () => {
  //   patientsAPI.fetchPatients().then(setPatients);
  // };
  const handlePatientFind = () => {
    setPatients(db.patients);
  };

  const handleResetPatientsList = () => {
    setPatients([]);
  };

  return (
    <>
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
    </>
  );
}
