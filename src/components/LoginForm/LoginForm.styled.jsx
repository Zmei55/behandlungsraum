import styled from '@emotion/styled';
import { ReactComponent as iconArrowRicht } from 'icons/arrowRicht.svg';

export const Section = styled.section`
  padding-top: ${props => props.theme.spacing(42)};
  padding-bottom: ${props => props.theme.spacing(46)};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 608px;
  height: 608px;
  padding-top: 96px;
  padding-bottom: 96px;
  margin-right: auto;
  margin-left: auto;

  border-radius: ${props => props.theme.borderRadius};
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.125;

  margin-bottom: ${props => props.theme.spacing(4)};
`;

export const SubTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  margin-bottom: ${props => props.theme.spacing(10)};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: ${props => props.theme.spacing(16)};
`;

export const Label = styled.label`
  :not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(4)};
  }
`;

export const Input = styled.input`
  font-size: 24px;
  line-height: 1.17;

  width: 368px;
  height: 72px;
  padding-top: ${props => props.theme.spacing(5.5)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-bottom: ${props => props.theme.spacing(5.5)};
  padding-left: ${props => props.theme.spacing(6)};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};

  ::placeholder {
    font-size: 24px;
    line-height: 1.17;
    color: ${props => props.theme.colors.text.placeholder};
  }
`;

export const Button = styled.button`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  color: ${props => props.theme.colors.text.white};

  width: 368px;
  height: 72px;
  background-color: ${props => props.theme.colors.primary.default};
  /* padding-top: ${props => props.theme.spacing(5.5)}; */
  /* padding-right: ${props => props.theme.spacing(6)}; */
  /* padding-bottom: ${props => props.theme.spacing(5.5)}; */
  /* padding-left: ${props => props.theme.spacing(6)}; */
  border-color: inherit;
  border-radius: ${props => props.theme.borderRadius};

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.primary.hover};
  }

  :active {
    background-color: ${props => props.theme.colors.primary.pressed};
  }
`;

export const IconArrowRicht = styled(iconArrowRicht)`
  margin-left: ${props => props.theme.spacing(7)};
`;
