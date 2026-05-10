import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='faqItemContainer'>
      <div className='faqHeader' onClick={toggleOpen}>
        <i className={`arrow ${isOpen ? "open" : ""}`}></i>
        {question}
      </div>
      {isOpen && <div className='faqBody'>{answer}</div>}
    </div>
  );
};

export default FaqItem;
