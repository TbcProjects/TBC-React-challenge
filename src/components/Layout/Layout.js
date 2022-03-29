import React from "react";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import ContactCard from "../ContactCard/ContactCard";

import "./Layout.css";

import { useContext } from "react";
import { DataContext } from "../../contexts/ContextProvider";

const Layout = ({ children }) => {
  const context = useContext(DataContext);
  const { isOpen, modalContent, darkTheme } = context;

  return (
    <>
      <Header />
      <main className={darkTheme ? "main-dark" : ""}>{children}</main>
      <Modal open={isOpen}>{<ContactCard data={modalContent[0]} />}</Modal>
    </>
  );
};

export default Layout;
