import {
  DesktopSection,
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
      <DesktopSection>
        <PrimaryContainer>
          <LargeContainer>
            <DesctopLink>
              <IconCreateDocument />
              Erstellen Sie eine Anwendung
            </DesctopLink>
          </LargeContainer>
        </PrimaryContainer>

        <SecondaryContainer>
          <MediumContainer>
            <DesctopLink>
              <IconFindDocument />
              Finden Sie eine Anwendung
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
      </DesktopSection>
    </>
  );
}
