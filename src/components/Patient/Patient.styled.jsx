import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as iconCross } from 'icons/cross.svg';

export const Container = styled.div`
  width: 1856px;
  height: 896px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: ${props => props.theme.spacing(4)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-bottom: ${props => props.theme.spacing(4)};
  padding-left: ${props => props.theme.spacing(6)};
  border-bottom: 2px solid #e6e6e6;
`;

export const RouterLink = styled(Link)``;

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding-top: ${props => props.theme.spacing(6)};
  padding-right: ${props => props.theme.spacing(6)};
  padding-bottom: ${props => props.theme.spacing(8)};
  padding-left: ${props => props.theme.spacing(6)};
`;

export const HeaderTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #1c1b3b;
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

export const Title = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #1c1b3b;

  margin-bottom: 30px;
`;

export const ServicesContainer = styled.div`
  margin-right: ${props => props.theme.spacing(16)};
`;

export const ContainersContainer = styled.div``;

export const IconCross = styled(iconCross)`
  fill: ${props => props.theme.colors.white};
  width: 32px;
  height: 30px;
`;
