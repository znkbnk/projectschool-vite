import { faqData } from "../data/faqData";
import "../styles/faq.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Faq = () => {
  return (
    <div>
      <Navbar />
      <div className='faq-container'>
        <div className='faq-header'>
          <h1>Frequently Asked Questions</h1>
          <p className='faq-subtitle'>
            Everything you need to know about Project School
          </p>
        </div>

        <div className='faq-list'>
          {faqData.map((faq, index) => (
            <div key={index} className='faq-item'>
              <h2 className='faq-question'>{faq.question}</h2>
              <p className='faq-answer'>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
