import React from 'react'
import Message from "../components/Message";
import Footer from '../common/Footer';
import WhatsAppButton from '../common/WhatsappButton';

function Contact() {
  return (
    <div>
      <Message/>
      <WhatsAppButton/>
      <Footer/>
    </div>
  )
}

export default Contact
