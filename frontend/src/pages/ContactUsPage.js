import React, { useState, useRef } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './ContactUs.css';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('@gmail.com');
  const [message, setMessage] = useState('');
  const emailRef = useRef(null);

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setName(value);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleDomainChange = (e) => {
    const newDomain = e.target.value;
    const atPosition = email.indexOf('@');
    const localPart = atPosition !== -1 ? email.slice(0, atPosition) : email;
    setDomain(newDomain);
    setEmail(`${localPart}${newDomain}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section className="contact-us-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="text-block text-black">
              <h2 className="mb-4 display-4"><strong>Contact us</strong></h2>
              <h3 className="mb-4 display-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt labore dolore magna aliqua.</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-block">
              <form onSubmit={handleSubmit} className="mbr-form form-with-styler">
                <div className="form-group">
                  <label htmlFor="name-form01-7" className="form-label">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    id="name-form01-7"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email-form01-7" className="form-label">Email</label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      id="email-form01-7"
                      value={email}
                      onChange={handleEmailChange}
                      ref={emailRef}
                      required
                    />
                    <select className="form-select" onChange={handleDomainChange} value={domain}>
                      <option value="@gmail.com">@gmail.com</option>
                      <option value="@microsoft.com">@microsoft.com</option>
                      <option value="@hotmail.com">@hotmail.com</option>
                      <option value="@outlook.com">@outlook.com</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message-form01-7" className="form-label">Message</label>
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="form-control"
                    id="message-form01-7"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="d-grid mt-3">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
