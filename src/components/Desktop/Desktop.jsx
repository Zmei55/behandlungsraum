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
            Erstellen Sie einen Auftrag
          </DesctopLink>
        </LargeContainer>
      </PrimaryContainer>

      <SecondaryContainer>
        <MediumContainer>
          <DesctopLink>
            <IconFindDocument />
            Finden Sie einen Auftrag
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
