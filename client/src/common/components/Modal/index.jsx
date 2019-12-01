import * as React from 'react';
import * as ReactDOM from 'react-dom';

export const Modal = (props) => {
  const { children, toggleModal } = props;

  return ReactDOM.createPortal(
    <div className="modal" tabIndex={-1}>
      <div className="modal-bg" onClick={() => toggleModal()} />
      <div className="modal-body">{children}</div>
    </div>,
    document.body,
  );
};
