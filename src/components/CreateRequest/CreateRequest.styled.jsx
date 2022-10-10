import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as iconCross } from 'icons/cross.svg';
// import { ReactComponent as iconSelectPatient } from 'icons/selectPatient.svg';
// import { ReactComponent as iconServicesAdd } from 'icons/servicesAdd.svg';
// import { ReactComponent as iconContainerAdd } from 'icons/containerAdd.svg';

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

// export const ModalBtn = styled.button`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   font-weight: 600;
//   font-size: 24px;
//   line-height: 1.17;
//   color: #115ffd;
//   fill: #115ffd;

//   width: 100%;
//   height: 100%;
//   border: 2px solid #115ffd;
//   box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
//   border-radius: 16px;
//   background-color: transparent;
//   /* border-color: transparent; */

//   :focus,
//   :hover {
//     color: ${props => props.theme.colors.primary.hover};
//     fill: ${props => props.theme.colors.primary.hover};
//     border-color: ${props => props.theme.colors.primary.hover};
//   }

//   :active {
//     color: ${props => props.theme.colors.primary.pressed};
//     fill: ${props => props.theme.colors.primary.pressed};
//     border-color: ${props => props.theme.colors.primary.pressed};
//   }

//   :disabled {
//     color: ${props => props.theme.colors.text.placeholder};
//     fill: ${props => props.theme.colors.text.placeholder};
//     border-color: ${props => props.theme.colors.text.placeholder};
//   }
// `;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #1c1b3b;

  margin-bottom: 30px;
`;

// export const Patient = styled.div`
//   width: 1808px;
//   height: 228px;
//   /* border: 2px solid #115ffd;
//   box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
//   border-radius: 16px; */
//   margin-bottom: 48px;

//   /* overflow: hidden; */
// `;

export const ServicesContainer = styled.div`
  margin-right: ${props => props.theme.spacing(16)};
`;

// export const Services = styled.div`
//   width: 722px;
//   height: 388px;
//   /* border: 2px solid #115ffd;
//   box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
//   border-radius: 16px; */

//   /* overflow: hidden; */
// `;

export const ContainersContainer = styled.div``;

// export const Containers = styled.div`
//   width: 1022px;
//   height: 388px;
//   /* border: 2px solid #9da0bd;
//   border-radius: 16px; */

//   /* overflow: hidden; */
// `;

export const IconCross = styled(iconCross)`
  fill: ${props => props.theme.colors.white};
  width: 32px;
  height: 30px;
`;

// export const IconSelectPatient = styled(iconSelectPatient)`
//   margin-bottom: 16px;
// `;

// export const IconServicesAdd = styled(iconServicesAdd)`
//   margin-bottom: 16px;
// `;

// export const IconContainerAdd = styled(iconContainerAdd)`
//   margin-bottom: 16px;
// `;
