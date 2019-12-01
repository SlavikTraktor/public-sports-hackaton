import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

export const Modal = (props) => {
  const dispatch = useDispatch();
  const { children } = props;
  const isModalOpen = useSelector(state => state.modal);

  const modalRef = React.useRef();

  React.useEffect(() => {
    if (isModalOpen) modalRef.current !== undefined ? modalRef.current.focus() : null;
  }, [isModalOpen, children]);

  return isModalOpen
    ? ReactDOM.createPortal(
      <div className="modal" tabIndex={-1} ref={modalRef}>
        <div className="modal-bg" onClick={() => dispatch.modal.hideModal()} />
        <div className="modal-body">{children}</div>
      </div>,
      document.body,
    )
    : null;
};
