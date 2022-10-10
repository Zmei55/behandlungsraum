import { Patient } from 'components/Patient';
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
  return (
    <Container>
      <Header>
        <HeaderTitle>Новая заявка</HeaderTitle>
        <RouterLink to="/desktop">
          <CloseBtn type="button">
            <IconCross />
          </CloseBtn>
        </RouterLink>
      </Header>

      <Body>
        <Patient />

        <ServicesContainer>
          <Title>Услуги</Title>
          <Services />
        </ServicesContainer>

        <ContainersContainer>
          <Title>Контейнеры</Title>
          <Containers />
        </ContainersContainer>
      </Body>
    </Container>
  );
}
