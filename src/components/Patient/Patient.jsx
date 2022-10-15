import { useState, useEffect } from 'react';
import db from 'data/db.json';
import { PatientInfo } from 'components/PatientInfo';
import { Services } from 'components/Services';
import { Containers } from 'components/Containers';
import {
  Container,
  Header,
  Body,
  RouterLink,
  HeaderTitle,
  CloseBtn,
  Title,
  ServicesContainer,
  ContainersContainer,
  IconCross,
} from './Patient.styled';

export function Patient({ patientID }) {
  const [patient, setPatient] = useState('');
  // const patient = db.patients.find(patient => patient.id === patientID);

  useEffect(() => {
    setPatient(db.patients.find(patient => patient.id === patientID));
  }, [patientID]);

  return (
    <Container>
      <Header>
        <HeaderTitle>Neue Bestellung</HeaderTitle>
        <RouterLink to="/desktop">
          <CloseBtn type="button">
            <IconCross />
          </CloseBtn>
        </RouterLink>
      </Header>

      <Body>
        <PatientInfo patient={patient} />

        <ServicesContainer>
          <Title>Services</Title>
          <Services />
        </ServicesContainer>

        <ContainersContainer>
          <Title>Containers</Title>
          <Containers />
        </ContainersContainer>
      </Body>
    </Container>
  );
}
