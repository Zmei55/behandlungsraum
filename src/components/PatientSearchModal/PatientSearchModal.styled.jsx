import styled from '@emotion/styled';
import { ReactComponent as iconCross } from 'icons/cross.svg';

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
