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

export function Patient() {
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
        <PatientInfo />

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
