var e=[`
// pages/Contact.js

import { useState } from 'react';
import '../styles/contactus.css';
import emailjs from 'emailjs-com';

const ContactUsPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    

    emailjs.sendForm('service_xxxxxxx', 'template_xxxxx', e.target, 'xxxxxxxxx')
      .then((result) => {
        console.log(result.text);
        setFeedback('Message sent successfully!');
        setForm({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, (error) => {
        console.log(error.text);
        setFeedback('There was an error sending the message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      
      {/* Contact Info Section */}
      <div className="contact-info">
        <p>Phone: +1 234 567 890</p>
        <p>Email: support@projectschool.dev</p>
      </div>
      
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />
        
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Feedback Message */}
      {feedback && <p>{feedback}</p>}

      {/* Google Maps Embed */}
      <div className="google-maps">
        <iframe
          title="School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27699.548551741544!2d-122.08424922724744!3d37.42206516965363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb4be0d233c7%3A0x105b9fa0f3005e65!2sGoogleplex!5e0!3m2!1sen!2sus!4v1612350731804!5m2!1sen!2sus"
          width="100%" 
          height="450" 
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          aria-label="Googleplex Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsPage;

`];export{e as default};
//# sourceMappingURL=day6-BsjVeesw.js.map