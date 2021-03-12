import React from "react";
import emailjs from "emailjs-com";

import "./ContactForm.css";

export default function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    const msgParams = {
      visitorsName: e.target.user_name.value,
      visitorsEmail: e.target.user_email.value,
      visitorsMsg: e.target.message.value,
    };

    emailjs
      .send(
        "service_9jusdn5",
        "template_lhhe91p",
        msgParams,
        "user_V2XqarGwCVXa4db8NEWRK"
      )
      .then((result) => {
        console.log(result.text);
        e.target.user_name.value = "";
        e.target.user_email.value = "";
        e.target.message.value = "";
      })
      .catch((error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="container-fluid row justify-content-center" id="dynamicContent">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4" id="formCol">
          <h1 id="formTitle">Contact Me</h1>
          <form className="mb-3 contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />

            <input
              className="form-control"
              type="text"
              name="user_name"
              placeholder="Chester Elegante"
            />

            <input
              className="form-control"
              type="email"
              name="user_email"
              placeholder="user@website.com"
            />

            <textarea
              className="form-control"
              name="message"
              placeholder="Enter a message!"
              id="msgInput"
            />
            <button
              className="btn btn-success"
              type="submit"
              value="Send"
              id="sendButton"
            >
              Send Email
            </button>
          </form>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}
