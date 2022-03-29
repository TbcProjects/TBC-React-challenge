import React from "react";
import "./ContactCard.css";
import { useContext } from "react";
import { DataContext } from "../../contexts/ContextProvider";

const ContactCard = ({ data, variant }) => {
  const context = useContext(DataContext);
  const { id, first_name, last_name, phone, profile_img } = data;
  const { darkTheme, getModalContent, handleModal } = context;

  if (!data) {
    return null;
  }

  return (
    <div
      tabIndex={"1"}
      className={`card ${darkTheme ? "card-dark" : ""} ${
        variant === "modal" ? "card-modal" : ""
      }`}
      onClick={e => {
        handleModal();
        getModalContent(id);
      }}
    >
      <img src={profile_img} alt="John" />
      <div
        className={`card-content ${
          variant === "modal" ? "card-content--modal" : ""
        } `}
      >
        <p>{first_name}</p>
        <p>{last_name}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default ContactCard;
