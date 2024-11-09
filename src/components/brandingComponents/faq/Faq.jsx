"use client";
import { useState } from "react";
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";

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
      className={`w-[90%] md:w-[70%] lg:w-[45%] mx-auto py-8 lg:py-20 ${sectionClassName}`}
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 md:mb-8 text-center text-black">
        {title}
      </h2>

      {/* FAQ List */}
      <ul className="space-y-5">
        {faqs.map((faq, index) => (
          <li
            key={index}
            className="border-b border-gray-300 p-4 cursor-pointer pb-8"
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
                <FaCircleArrowDown className="w-7 h-7 bg-slate-200 rounded-full text-black" />
              ) : (
                <FaCircleArrowUp className="w-7 h-7 rounded-full text-gray-400" />
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
