import React from 'react';
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Form submitted!');
    };

    return (
        <>
      <div style={{ padding: '0px 20px', width: '100%' }}>
        <h1 style={{padding: '20px 0px 20px 0px', margin: '0px'}}>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{ display: 'block', height: '20px',margin: '10px 0',width: '100%' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: 'block', height: '20px',margin: '10px 0',width: '100%' }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{ display: 'block', height: '20px',margin: '10px 0',width: '100%', height:'100px' }}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
      </>
    );
  }

  export default Contact;