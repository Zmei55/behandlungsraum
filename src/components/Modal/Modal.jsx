import { createPortal } from 'react-dom';
import { Backdrop, Content } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ children }) {
  return createPortal(
    <Backdrop>
      <Content>{children}</Content>
    </Backdrop>,
    modalRoot
  );
}
