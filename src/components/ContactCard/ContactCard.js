import React from "react";
import "./ContactCard.css";

const ContactCard = ({ data, img }) => {
  console.log(data);
  return (
    <>
      <div className="card">
        <img src={data[0].profile_img} alt="John" />
        <h1>John Doe</h1>
        <p className="title">CEO & Founder, Example</p>
        <p>Harvard University</p>
        <a href="/">
          <i className="fa fa-dribbble"></i>
        </a>
        <a href="/">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="/">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="/">
          <i className="fa fa-facebook"></i>
        </a>
        <p>
          <button className="btn">Contact</button>
        </p>
      </div>
    </>
  );
};

export default ContactCard;
