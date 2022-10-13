import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PatientsList = styled.ul`
  height: 408px;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    height: 100px;
    border-radius: 25px;
    background-color: ${props => props.theme.colors.secondary.default};

    :active {
      background-color: ${props => props.theme.colors.secondary.pressed};
    }
  }
`;

export const PatientsListItem = styled.li`
  display: flex;
`;

export const PatientsName = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  width: 674px;
  height: 72px;
  padding: 22px 24px;
`;

export const BirthDay = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  width: 301px;
  height: 72px;
  padding: 22px 24px;
`;

export const CardNumber = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  width: 223px;
  height: 72px;
  padding: 22px 24px;
`;

export const SelectBtn = styled(Link)`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: ${props => props.theme.colors.primary.default};

  width: 194px;
  height: 72px;
  padding: 22px 24px;
  text-decoration: none;

  :focus,
  :hover {
    color: ${props => props.theme.colors.primary.hover};
  }

  :active {
    color: ${props => props.theme.colors.primary.pressed};
  }
`;
