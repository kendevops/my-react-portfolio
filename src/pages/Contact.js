import React from "react";
import Title from "../Components/Title";
import ContactSection from "../Components/contactSection";

const Contact = () => {
  return (
    <div className="Contacts">
      <Title title={"Contact"} span={"Contact"} />
      <div className="map-sect"></div>
      <div className="contact-sect">
        <ContactSection
          icon={phone}
          text1={"+2347033960652"}
          text2={"(+234) 815 2269 553"}
          title={"Phone"}
        />
        <ContactSection
          icon={email}
          text1={"+2347033960652"}
          text2={"(+234) 815 2269 553"}
          title={"Email"}
        />
        <ContactSection
          icon={location}
          text1={"+2347033960652"}
          text2={"(+234) 815 2269 553"}
          title={"Location"}
        />
      </div>
    </div>
  );
};

export default Contact;
