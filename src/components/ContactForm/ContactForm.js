import React from "react";
import emailjs from "emailjs-com";
import "./ContactForm.scss"

const ContactForm = () => {
  const nameInput = React.useRef();
  const emailInput = React.useRef();
  const messageInput = React.useRef();

  const clearName = () => (nameInput.current.value = "");
  const clearEmail = () => (emailInput.current.value = "");
  const clearMessage = () => (messageInput.current.value = "");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rmuye2u",
        "template_ylslhnd",
        e.target,
        "user_QWoMp5BDY50BJtFhJ8SCA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Sent! Thanks for reaching out!");
          clearName();
          clearEmail();
          clearMessage();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="contact" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label id="user-name" className="contact__user-name">
        Name: <input type="text" name="user-name" ref={nameInput} />
      </label>
      <label id="user-email" className="contact__user-email">
        Email: <input type="email" name="user-email" ref={emailInput} />
      </label>{" "}
      <label id="message" className="contact__message-label">Message</label>
      <textarea name="message" className="contact__message" ref={messageInput} />
      <input type="submit" value="Send" className="contact__submit-button" />
    </form>
  );
};

export default ContactForm;
