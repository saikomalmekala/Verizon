import React, { useState } from 'react';

const faqData = [
  {
    question: '1.How do I sign up for an account ?',
    answer: 'To sign up for an account, simply click on the "Sign Up" button on the top right corner of our website.' 
         
  },
  {
    question: '2.How do I reset my password ? ',
    answer: 'If you ve forgotten your password or need to reset it for any reason, simply click on the "Forgot Password" link on the login page. Follow the instructions to reset your password, and you  receive an email with further steps to complete the process.'
  },
  {
    question: '3.What payment methods do you accept ?',
    answer: 'We accept several payment methods, including [list of accepted payment methods, such as credit/debit cards, PayPal, etc.]. You can choose the option that is most convenient for you during the checkout process.'
  },
  {
    question: '4.How can I track my order ?',
    answer: 'Once your order has been shipped, you will receive a confirmation email with a tracking number and instructions on how to track your package. You can also log in to your account and navigate to the "Order History" section to track the status of your order.'
  },
  {
    question: '5.Is there a way to download invoices for my purchases? ',
    answer: 'Yes, you can download invoices for your purchases by logging in to your account and visiting the "Billing" or "Payment History" section. There, youll find a list of your past transactions, each with an option to download the corresponding invoice in PDF format.'
  },
  {
    question: '6.What are your business hours ? ',
    answer: 'Our business hours are Monday to Friday, 9:00 AM to 5:00 PM (EST). We are closed on weekends and public holidays.'
  },
  {
    question: '7.What is your return policy ? ',
    answer: 'Our return policy allows for returns within 30 days of purchase for a full refund. Please refer to our Returns & Refunds page for more details.'
  },
  {
    question: '8.How do I download my purchase ? ',
    answer: 'After completing your purchase, you will receive an email with download instructions. You can also download your purchase by logging into your account and navigating to the "Downloads" section.'
  },
  {
    question: '9.How do I cancel my subscription ? ',
    answer: 'You can cancel your subscription at any time by logging into your account and navigating to the "Subscription" or "Billing" section. Follow the prompts to cancel your subscription.'
  },
  {
    question: '10.Can I change my shipping address after placing an order ? ',
    answer: 'If your order has not yet been shipped, you may be able to change your shipping address by contacting our customer support team. Once an order has been shipped, we are unable to change the shipping address.'
  },
  {
    question: '11.Do you offer bulk discounts ? ',
    answer: 'Yes, we offer discounts on bulk orders. Please contact our sales team at sales@company.com for more information.'
  },
  {
    question: '12.How do I update my account information, such as email address or contact details. ? ',
    answer: 'You can update your account information by logging in and navigating to the "My Account" or "Profile" section. '
  },
  {
    question: '13.How can I track the progress of my support ticket or inquiry? ',
    answer: 'You can track the progress of your support ticket by logging in to your account and visiting the "Support" or "Help" section. '
  },
  {
    question: '14.Do you offer gift wrapping?',
    answer: 'Yes, we offer gift wrapping for an additional fee. You can select the gift wrapping option during the checkout process'
  },
  {
    question: '15.How do I unsubscribe from your mailing list?',
    answer: 'You can unsubscribe from our mailing list by clicking on the "Unsubscribe" link at the bottom of any promotional email you receive from us. '
  },



];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div
              className={`question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </div>
            {activeIndex === index && <div className="answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;