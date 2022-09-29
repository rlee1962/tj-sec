import { useState, useEffect } from 'react';
import ReactDom from 'react-dom';

// import styles from '../styles/Home.module.css';

function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-body">
        <button onClick={onClose}>Close Modal</button> {children}
      </div>
    </>,
    document.getElementById('modal-root'),
  );
}

export default Modal;
