import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(230, 230, 230, 0.7);
  backdrop-filter: blur(3px);
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1574px;
  min-width: 642px;
  max-height: 890px;
  min-height: 460px;
  background-color: #fff;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
`;
