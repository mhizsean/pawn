import React, { useState } from 'react';
import FaqProp from './FaqProp.js';
import { colors } from './colors';
import { makeStyles } from '@material-ui/styles';
import { AppContext } from "./App";
import { useContext } from "react";
import { useEffect } from "react";


const useStyles = makeStyles({
    question:{
      color: 'red'
    }
    });



export default function CustomerFaqs () {
  const appContext = useContext(AppContext);
  const { faqSearch } = appContext;
  const toBeSearched =[
      {
        question: 'What does pawndr does to ensure safety ?',
        answer: 'When it comes to safety, pawndr offers trained professionals (private contractors), with each pet, livestock or animal handling. Each driver has their own pet insurance and liability policy  in case of any accidents, loss or injuries.',
        open: false
      },
      {
        question: 'Can i track my order?',
        answer: 'Customers are also provided with live gps tracking so they can see where their transports are at all times.',
        open: false
      },
      {
        question: 'Where can  I get a receipt for my booking(s)?',
        answer: 'You can receive and review your receipt transactions through our app, through email or SMS.',
        open: false
      },
      {
        question: 'What information does Pawndr Share?',
        answer: 'Pawndr is developed in accordance with best practices for building secure web applications. We employ the latest technology and hardware to ensure that your data is secure. We do not under any circumstances share any personal information to any other third parties without the consent of the customer or driver. Please review are policy on cookies and data usage for more information.',
        open: false
      },
      {
        question: 'What is pawndr review policy?',
        answer: 'Open and honest communication is the foundation of every great relationship. , We love when our pet, animal and livestock owners leave reviews on Pawndr. Honest feedback helps us to improve our service for customer satisfaction.',
        open: false
      },
      {
        question: 'Should I tip a Valet Driver?',
        answer: 'Booking through Pawndr will always be cashless and convenient. That said, if you’d like to offer them a tip, you’re perfectly welcome to! Just know that it’s never expected or required. However, we do find that tipping is also a great incentive and appreciation for hard work.',
        open: false
      },
      {
        question: 'How does booking on pawndr works?',
        answer: 'Booking your pickup or delivery is very easy process. You indicate the pick up and delivery locations, time,  then payment . After payment, relax as your delivery or pickup is taken care by experienced drivers. It is essential that you communicate with your designated Valet driver to ensure all details are covered for your upcoming trip. Communication is key for a successful trip.',
        open: false
      },
      {
        question: 'Pawndr is in how many states?',
        answer: 'Panwdr is available in all 48 states. Excluding Hawaii and Alaska. We expect to expand to both Hawaii, Alaska and Canada at a later time depending on their specific needs. ',
        open: false
      },
      {
        question: 'Can I do repeat booking?',
        answer: 'Yes! You can do repeat booking with our easy-to-use application. You can do a repeat booking in days, weeks, months or year. We offer an incentive program for repeat bookings to get a free booking after 7 bookings with us.',
        open: false
      },
      {
        question: 'Can I monitor the process of my booking?',
        answer: 'Absolutely, you can monitor your booking process, as you can communicate with our drivers during the pickup and delivery timeframe.',
        open: false
      },
      {
        question: 'What is your cancellation policy?',
        answer: 'At Pawndr, we understand mistakes and emergencies happen. Due to the nature of our service, for us and the drivers involved, time is money. We have a 48 hour cancellation policy for bookings placed 3 days or more in  advance. For days or times sooner or under 3 days we have a 12 hour cancellation policy. For bookings cancelled within or after these time frames, we charge a 25% cancellation fee based on your trip quote.',
        open: false
      },
      {
        question: 'What Services does Pawndr Offer?',
        answer: 'We offer services like Pet pickup and delivery and Livestock pickup and delivery and exotic animal  pick up and delivery with restrictions on highly dangerous or endangered species.',
        open: false
      },
    ];
  
    useEffect(() => {
      if (faqSearch.length > 0) {
        const filteredFAQS = toBeSearched.filter((faq) => {
          return faq.question.toLowerCase().includes(faqSearch);
        });
        setfaqs(filteredFAQS);
      } else {
        setfaqs(toBeSearched);
      }
    }, [faqSearch]);
    const [faqs, setfaqs] = useState([
      {
        question: "What does pawndr does to ensure safety ?",
        answer:
          "When it comes to safety, pawndr offers trained professionals (private contractors), with each pet, livestock or animal handling. Each driver has their own pet insurance and liability policy  in case of any accidents, loss or injuries.",
        open: false,
      },
      {
        question: "Can i track my order?",
        answer:
          "Customers are also provided with live gps tracking so they can see where their transports are at all times.",
        open: false,
      },
      {
        question: "Where can  I get a receipt for my booking(s)?",
        answer:
          "You can receive and review your receipt transactions through our app, through email or SMS.",
        open: false,
      },
      {
        question: "What information does Pawndr Share?",
        answer:
          "Pawndr is developed in accordance with best practices for building secure web applications. We employ the latest technology and hardware to ensure that your data is secure. We do not under any circumstances share any personal information to any other third parties without the consent of the customer or driver. Please review are policy on cookies and data usage for more information.",
        open: false,
      },
      {
        question: "What is pawndr review policy?",
        answer:
          "Open and honest communication is the foundation of every great relationship. , We love when our pet, animal and livestock owners leave reviews on Pawndr. Honest feedback helps us to improve our service for customer satisfaction.",
        open: false,
      },
      {
        question: "Should I tip a Valet Driver?",
        answer:
          "Booking through Pawndr will always be cashless and convenient. That said, if you’d like to offer them a tip, you’re perfectly welcome to! Just know that it’s never expected or required. However, we do find that tipping is also a great incentive and appreciation for hard work.",
        open: false,
      },
      {
        question: "How does booking on pawndr works?",
        answer:
          "Booking your pickup or delivery is very easy process. You indicate the pick up and delivery locations, time,  then payment . After payment, relax as your delivery or pickup is taken care by experienced drivers. It is essential that you communicate with your designated Valet driver to ensure all details are covered for your upcoming trip. Communication is key for a successful trip.",
        open: false,
      },
      {
        question: "Pawndr is in how many states?",
        answer:
          "Panwdr is available in all 48 states. Excluding Hawaii and Alaska. We expect to expand to both Hawaii, Alaska and Canada at a later time depending on their specific needs. ",
        open: false,
      },
      {
        question: "Can I do repeat booking?",
        answer:
          "Yes! You can do repeat booking with our easy-to-use application. You can do a repeat booking in days, weeks, months or year. We offer an incentive program for repeat bookings to get a free booking after 7 bookings with us.",
        open: false,
      },
      {
        question: "Can I monitor the process of my booking?",
        answer:
          "Absolutely, you can monitor your booking process, as you can communicate with our drivers during the pickup and delivery timeframe.",
        open: false,
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "At Pawndr, we understand mistakes and emergencies happen. Due to the nature of our service, for us and the drivers involved, time is money. We have a 48 hour cancellation policy for bookings placed 3 days or more in  advance. For days or times sooner or under 3 days we have a 12 hour cancellation policy. For bookings cancelled within or after these time frames, we charge a 25% cancellation fee based on your trip quote.",
        open: false,
      },
      {
        question: "What Services does Pawndr Offer?",
        answer:
          "We offer services like Pet pickup and delivery and Livestock pickup and delivery and exotic animal  pick up and delivery with restrictions on highly dangerous or endangered species.",
        open: false,
      },
    ]);
    const toggleFAQ = (index) => {
      setfaqs(
        faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open;
          } else {
            faq.open = false;
          }
  
          return faq;
        })
      );
    };
  
    return (
      <div className="App">
        <div className="faqs">
          {faqs.map((faq, i) => (
            <FaqProp faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    );
  }
  