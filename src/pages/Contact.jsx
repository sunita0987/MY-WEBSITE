import React from "react";
import Message from "../components/Message";
import Footer from "../common/Footer";
import WhatsAppButton from "../common/WhatsappButton";
import ContactInfo from "../components/ContactInfo";

function Contact() {
  return (
    <div>
      <Message />
      <ContactInfo />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default Contact;
