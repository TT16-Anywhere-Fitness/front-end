import React from 'react'
import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
  <section id="contact">
    <div className="inner">
      <ContactForm />
      <ContactInfo />
    </div>
  </section>
  )
}

export default Contact
