import React from "react";
import Title from "../Components/Title";
import ContactSection from "../Components/ContactSection";

const Contact = () => {
  return (
    <div className="Contacts">
      <Title title={"Contact"} span={"Contact"} />
      <div className="contact-details">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147665.4209188347!2d6.956277835259235!3d4.831198917144095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cea39f2c48e3%3A0x53562bdd7d8832db!2sPort%20Harcourt!5e0!3m2!1sen!2sng!4v1626935573016!5m2!1sen!2sng"
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
            // icon={phone}
            text1={"+2347033960652"}
            text2={"(+234) 815 2269 553"}
            title={"Phone"}
          />
          <ContactSection
            // icon={email}
            text1={"+2347033960652"}
            text2={"(+234) 815 2269 553"}
            title={"Email"}
          />
          <ContactSection
            // icon={location}
            text1={"+2347033960652"}
            text2={"(+234) 815 2269 553"}
            title={"Location"}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
