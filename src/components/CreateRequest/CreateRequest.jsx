import { useState } from 'react';
import { PatientSearch } from 'components/PatientSearch';
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
} from './CreateRequest.styled';

export function CreateRequest() {
  const [patients, setPatients] = useState([]);

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
        <PatientSearch patients={patients} setPatients={setPatients} />

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
