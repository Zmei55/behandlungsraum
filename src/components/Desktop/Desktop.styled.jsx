import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as iconCreateDocument } from 'icons/createDocument.svg';
import { ReactComponent as iconFindDocument } from 'icons/findDocument.svg';
import { ReactComponent as iconFindContainer } from 'icons/findContainer.svg';
import { ReactComponent as iconDocuments } from 'icons/documents.svg';

export const PrimaryContainer = styled.div`
  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const SecondaryContainer = styled.div`
  display: flex;
`;

export const LargeContainer = styled.div`
  position: relative;

  width: 1856px;
  height: 440px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
`;

export const MediumContainer = styled.div`
  position: relative;

  width: 686px;
  height: 440px;
  margin-right: ${props => props.theme.spacing(4)};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
`;

export const SmallContainer = styled.div`
  position: relative;

  width: 452px;
  height: 440px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
`;

export const DesctopLink = styled(Link)`
  position: absolute;
  bottom: ${props => props.theme.spacing(8)};
  left: ${props => props.theme.spacing(8)};

  display: flex;
  flex-direction: column;

  text-decoration: none;
  color: ${props => props.theme.colors.text.default};
`;

export const IconCreateDocument = styled(iconCreateDocument)`
  fill: ${props => props.theme.colors.primary.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }
`;

export const IconFindDocument = styled(iconFindDocument)`
  fill: ${props => props.theme.colors.primary.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }
`;

export const IconFindContainer = styled(iconFindContainer)`
  fill: ${props => props.theme.colors.primary.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }
`;

export const IconDocuments = styled(iconDocuments)`
  fill: ${props => props.theme.colors.primary.default};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }
`;
