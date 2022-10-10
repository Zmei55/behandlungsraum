import styled from '@emotion/styled';
import { ReactComponent as iconMainMenu } from 'icons/mainMenu.svg';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 24px;
  padding-right: 66px;
  padding-bottom: 24px;
  padding-left: 32px;

  background-color: #fff;
`;

export const Button = styled.button`
  fill: ${props => props.theme.colors.primary.default};
  background-color: ${props => props.theme.colors.text.white};

  width: 72px;
  height: 72px;
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};

  :focus,
  :hover {
    fill: ${props => props.theme.colors.primary.hover};
  }

  :active {
    fill: ${props => props.theme.colors.primary.pressed};
  }

  :disabled {
    fill: ${props => props.theme.colors.primary.disabled};
  }
`;

export const IconMainMenuBtn = styled(iconMainMenu)``;

export const Body = styled.section`
  padding: ${props => props.theme.spacing(8)};
`;
