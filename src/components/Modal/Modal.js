import React from "react";
import "./Modal.css";
import { useContext } from "react";
import { DataContext } from "../../contexts/ContextProvider";

const Modal = ({ children }) => {
  const context = useContext(DataContext);
  const { isOpen, handleModal } = context;

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="modal">{children}</div>
      <div className="overlay" onClick={handleModal}></div>
    </>
  );
};

export default Modal;
