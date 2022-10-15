import {
  Container,
  NameBox,
  MoreInformationBtn,
  Name,
  LessInformationBtn,
  ChangeDataBtn,
  InfoBox,
} from './PatientInfo.styled';

export function PatientInfo({ patient }) {
  return (
    <Container>
      <NameBox>
        <MoreInformationBtn></MoreInformationBtn>
        <Name>{patient.name}</Name>
        <LessInformationBtn></LessInformationBtn>
        <ChangeDataBtn>To change the data</ChangeDataBtn>
      </NameBox>
      <InfoBox></InfoBox>
    </Container>
  );
}
