import React from "react";
import Title from "../Components/Title";
import ContactSection from "../Components/ContactSection";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";

const Contact = () => {
  return (
    <div className="Contacts">
      <div className="contact-title">
        <Title title={"Contact"} span={"Contact"} />
      </div>
      <div className="contact-details">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070402.195925143!2d4.179989050200096!3d9.006512062291518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1630507675819!5m2!1sen!2sng"
            title="map"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactSection
            icon={phone}
            text1={"+2347033960652"}
            text2={"(+234) 815 2269 553"}
            title={"Phone No"}
          />
          <ContactSection
            icon={email}
            text1={"kendevops@gmail.com"}
            title={"Email me"}
          />
          <ContactSection
            icon={location}
            text1={"Nigeria"}
            title={"Location"}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
