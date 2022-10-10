import styled from '@emotion/styled';
import { ReactComponent as iconServicesAdd } from 'icons/servicesAdd.svg';

export const Container = styled.div`
  width: 722px;
  height: 388px;
  /* border: 2px solid #115ffd;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
  border-radius: 16px; */

  /* overflow: hidden; */
`;

export const ModalBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  color: #115ffd;
  fill: #115ffd;

  width: 100%;
  height: 100%;
  border: 2px solid #115ffd;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
  border-radius: 16px;
  background-color: transparent;
  /* border-color: transparent; */

  :focus,
  :hover {
    color: ${props => props.theme.colors.primary.hover};
    fill: ${props => props.theme.colors.primary.hover};
    border-color: ${props => props.theme.colors.primary.hover};
  }

  :active {
    color: ${props => props.theme.colors.primary.pressed};
    fill: ${props => props.theme.colors.primary.pressed};
    border-color: ${props => props.theme.colors.primary.pressed};
  }

  :disabled {
    color: ${props => props.theme.colors.text.placeholder};
    fill: ${props => props.theme.colors.text.placeholder};
    border-color: ${props => props.theme.colors.text.placeholder};
  }
`;

export const IconServicesAdd = styled(iconServicesAdd)`
  margin-bottom: 16px;
`;
