import {
  PrimaryContainer,
  SecondaryContainer,
  LargeContainer,
  MediumContainer,
  SmallContainer,
  DesctopLink,
  IconCreateDocument,
  IconFindDocument,
  IconFindContainer,
  IconDocuments,
} from './Desktop.styled';

export function Desktop() {
  return (
    <>
      <PrimaryContainer>
        <LargeContainer>
          <DesctopLink to="/create-request">
            <IconCreateDocument />
            Erstellen Sie eine Bestellung
          </DesctopLink>
        </LargeContainer>
      </PrimaryContainer>

      <SecondaryContainer>
        <MediumContainer>
          <DesctopLink>
            <IconFindDocument />
            Finden Sie eine Bestellung
          </DesctopLink>
        </MediumContainer>

        <MediumContainer>
          <DesctopLink>
            <IconFindContainer />
            Finden Sie eine Behälter
          </DesctopLink>
        </MediumContainer>

        <SmallContainer>
          <DesctopLink>
            <IconDocuments />
            Unterlagen
          </DesctopLink>
        </SmallContainer>
      </SecondaryContainer>
    </>
  );
}
