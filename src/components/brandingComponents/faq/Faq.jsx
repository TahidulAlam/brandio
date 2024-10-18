"use client";
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Faq = ({
  faqs,
  title,
  sectionClassName = "",
  questionClassName = "",
  answerClassName = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Collapse if active, expand otherwise
  };

  return (
    <section
      className={`w-[90%] md:w-[70%] lg:w-[50%] mx-auto py-8 md:py-16 ${sectionClassName}`}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 md:mb-8 text-center md:text-left">
        {title}
      </h2>

      {/* FAQ List */}
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li
            key={index}
            className="border-b border-gray-300 p-4 cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3
                className={`text-base md:text-lg font-bold ${questionClassName}`}
              >
                {faq.question}
              </h3>
              {activeIndex === index ? (
                <FaArrowUp className="w-5 h-5 text-gray-600" />
              ) : (
                <FaArrowDown className="w-5 h-5 text-gray-600" />
              )}
            </div>

            {/* Smooth transition for answer */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${answerClassName} ${
                activeIndex === index
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Faq;
