import React from 'react'

const ContactForm = () => {
  return (
  <section>
    <form method="post" action="#">
      <div className="fields">
        <div className="field half">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="6"></textarea>
        </div>
      </div>
      <ul className="actions">
        <li><input type="submit" value="Send Message" className="primary" /></li>
        <li><input type="reset" value="Clear" /></li>
      </ul>
    </form>
  </section>
  )
}

export default ContactForm
