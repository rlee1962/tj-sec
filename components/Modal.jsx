import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactDom from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseCircleLine, RiCloseCircleFill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

// import styles from '../styles/Home.module.css';

function Modal({ open, children, onClose }) {
  const router = useRouter();
  // console.log(onClose);

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      {/* <AnimatePresence> */}
      <motion.div
        onClick={onClose}
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: { duration: 3, delay: 0.25 },
        }}
      />

      <motion.div
        className="modal-body"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 2, delay: 0.25 },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 3, delay: 0.25 },
        }}
      >
        {/* <button onClick={onClose}>Close Modal</button>  */}
        {children}

        <AiOutlineClose onClick={onClose} className="modal-close-button" />
      </motion.div>
      {/* </AnimatePresence> */}
    </>,

    document.getElementById('modal-root'),
  );
}

export default Modal;
