var e=[`
// App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>          
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

`,`
// pages/Contact.js

import { useState } from 'react';
import '../styles/contactus.css';

const ContactUsPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form 
    console.log(form);
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
        
        <button type="submit">Send Message</button>
      </form>

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

`,`
// pages/Testimonials.js

import { useState } from 'react';
import '../styles/testimonials.css';

const testimonials = [
  {
    name: "Name 1",
    image: "path/to/name1.jpg",
    testimonial: "ProjectSchool helped me master React. The courses are well-structured and the support is amazing!",
  },
  {
    name: "Name 2",
    image: "path/to/name2.jpg",
    testimonial: "The lessons were clear and practical. I was able to build a real-world project in no time!",
  },
];

const TestimonialsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="testimonials">
      <h2 className="section-title">What Our Students Say</h2>
      
      {/* Render the active testimonial */}
      <div className="testimonial-card">
        <img
          src={testimonials[activeIndex].image}
          alt={testimonials[activeIndex].name}
          className="testimonial-image"
        />
        <p className="testimonial-text">
          {testimonials[activeIndex].testimonial}
        </p>
        <div className="testimonial-author">{testimonials[activeIndex].name}</div>
        <div className="testimonial-role">Student</div>
      </div>

      {/* Navigation dots */}
      <div className="testimonial-nav">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={\`nav-dot \${index === activeIndex ? 'active' : ''}\`}
            onClick={() => handleNavClick(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsPage;

`,`
solution
`,`
solution
`,`
solution
`,`
solution
`,`
solution
`,`
solution
`,`
solution
`];export{e as default};
//# sourceMappingURL=day5-CYaKb2O6.js.map