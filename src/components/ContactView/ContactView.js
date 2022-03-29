import React from "react";
import "./ContactView.css";
import ContactCard from "../ContactCard/ContactCard";
import { useContext } from "react";
import { DataContext } from "../../contexts/ContextProvider";

const ContactView = () => {
  const context = useContext(DataContext);
  const { data } = context;

  return (
    <>
      <div className="container">
        {data.map((profile, index) => {
          const keys = profile.id;
          return (
            <ContactCard
              tabIndex={index}
              key={keys}
              data={profile}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContactView;
