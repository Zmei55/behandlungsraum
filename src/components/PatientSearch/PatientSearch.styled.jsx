import styled from '@emotion/styled';
import { ReactComponent as iconSelectPatient } from 'icons/selectPatient.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as iconCross } from 'icons/cross.svg';

export const Container = styled.div`
  width: 1808px;
  height: 228px;
  /* border: 2px solid #115ffd;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
  border-radius: 16px; */
  margin-bottom: 48px;

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

export const IconSelectPatient = styled(iconSelectPatient)`
  margin-bottom: 16px;
`;

export const ModalContainer = styled.div`
  width: 1392px;
  height: 752px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 24px;
  padding-left: 24px;
  border-bottom: 2px solid #e6e6e6;
`;

// export const RouterLink = styled(Link)``;

export const ModalTitle = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.13;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ResetBtn = styled.button`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;

  width: 205px;
  height: 72px;
  margin-right: 24px;
  background-color: transparent;
  border: 2px solid #dce0f5;
  border-radius: 16px;

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.secondary.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.secondary.pressed};
  }
`;

export const FindBtn = styled.button`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  color: #fff;

  width: 162px;
  height: 72px;
  margin-right: 24px;
  background-color: ${props => props.theme.colors.primary.default};
  border-color: transparent;
  border-radius: 16px;

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.primary.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.primary.pressed};
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: 72px;
  padding: 0;
  background-color: ${props => props.theme.colors.error.default};
  border-color: transparent;
  border-radius: 16px;

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.error.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.error.pressed};
  }
`;

export const IconCross = styled(iconCross)`
  fill: ${props => props.theme.colors.white};
  width: 32px;
  height: 30px;
`;

export const Form = styled.form`
  display: flex;

  padding-top: 64px;
  padding-right: 24px;
  padding-left: 24px;
  margin-bottom: 72px;
`;

export const Label = styled.label`
  display: block;

  :not(:last-child) {
    margin-right: 16px;
  }
`;

export const NameInput = styled.input`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #1c1b3b;

  width: 650px;
  height: 72px;
  padding: 22px 24px;
  border: 2px solid #e6e6e6;
  border-radius: 16px;
  outline: none;

  :focus,
  :hover {
    border-color: ${props => props.theme.colors.primary.hover};
  }

  ::placeholder {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #9da0bd;
  }
`;

export const BirthDayInput = styled.input`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #1c1b3b;

  width: 294px;
  height: 72px;
  padding: 22px 24px;
  border: 2px solid #e6e6e6;
  border-radius: 16px;
  outline: none;

  :focus,
  :hover {
    border-color: ${props => props.theme.colors.primary.hover};
  }

  ::placeholder {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #9da0bd;
  }
`;

export const MedicalCardInput = styled.input`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #1c1b3b;

  width: 206px;
  height: 72px;
  padding: 22px 24px;
  border: 2px solid #e6e6e6;
  border-radius: 16px;
  outline: none;

  :focus,
  :hover {
    border-color: ${props => props.theme.colors.primary.hover};
  }

  ::placeholder {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #9da0bd;
  }
`;

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
