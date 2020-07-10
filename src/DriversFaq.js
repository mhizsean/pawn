import React, { useState } from 'react';
import FaqProp from './FaqProp.js';
import { colors } from './colors';
import { makeStyles } from '@material-ui/styles';
import { AppContext } from "./App";
import { useContext, useEffect } from "react";



const useStyles = makeStyles({
    question:{
      color: 'red'
    }
    });



export default function DriverFaqs () {
  const appContext = useContext(AppContext);
  const { faqSearch } = appContext;
  const toBeSearched =[
      {
        question: 'How can I become a Valet Driver?',
        answer: 'Interesting in driving with us or expanding your transport business? Look no further, with our easy sign up and application process you can start driving and earning in no time! You must first past both our driver certification and background check and qualification criteria.',
        open: false
      },
      {
        question: 'Why should I become a Valet Driver?',
        answer: 'You can make your own schedule and be your own boss while making uncapped earnings as a driver. You will also learn skills essential for operation and for your career.',
        open: false
      },
      {
        question: 'How long will it take for pawndr to review my profile?',
        answer: 'You profile is reviewed between 3-5 working days.',
        open: false
      },
      {
        question: 'How do I verify my identity?',
        answer: 'After applying to be a driver, we conduct a thorough background check and require both photo I.D, social security and social media account references. Once approved you will be verified.',
        open: false
      },
      {
        question: 'What are the service fees?',
        answer: 'For drivers , we take 18% of every order you accept and complete. We also offer a $9.99 monthly subscription.',
        open: false
      },
      {
        question: 'What is pawndr?',
        answer: 'Panwdr is a tech platform that connects drivers to customers for pick ups and deliveries for pets and livestock. We offer other services for pets animals and livestock. Check our app for updates on services you may need.',
        open: false
      },
      {
        question: 'What are Pawndr’s Terms of service?',
        answer: 'Kindly visit our Terms of Service Page for answers to this question.',
        open: false
      },
      {
        question: 'Are drivers employees of Pawndr?',
        answer: 'No, drivers are not employees of pawndr. Drivers are private contractors (1099) and operate under their own identities. Drivers are solely responsible for all services rendered.',
        open: false
      },
      {
        question: 'How can I contact Pawndr Support?',
        answer: 'You can contact Pawndr support at support@gopawndr.com for any questions, concerns or just to say hi! We don’t bite.',
        open: false
      },
      {
        question: 'How can I view my profile? ',
        answer: 'On our dedicated app, you can edit and update your profile by a click on the edit profile on pawndr app, edit your profile and save.',
        open: false
      },
      {
        question: 'How can I manage my Calendar?',
        answer: 'You can manage your calendar on your driver app. Navigate to the calendar menu on the sidebar, set days when you will be available to get booking and days you will be unavailable.',
        open: false
      },
      {
        question: 'How can I manage my inbox?',
        answer: 'On pawndr’s dedicated app, you can manage your inbox, by navigating to the inbox section on the sidebar, read messages, also get booking notifications.',
        open: false
      },
      {
        question: 'How do I issue an invoice or be available for repeat booking?',
        answer: 'You can issue invoice to a pet or livestock owner on our dedicated app, by sending it directly to their emails and also as SMS.',
        open: false
      },
      {
        question: 'How can I view my total earnings?',
        answer: 'Navigate, to the statistics menu of the sidebar, navigate to check earnings, earnings expected, etc.',
        open: false
      },
      {
        question: 'What can I do if I have concerns about the wellbeing of a pet or livestock in my car?',
        answer: 'We recommend always, to contact your customer directly if you have any questions or concerns. Drivers can also contact support for any questions on how to handle situations and or concerns about a specific pet, animal or livestock. Please do not ignore a serious or unusual situation. Using common sense is an essential part of being both and excellent driver and solving problems.',
        open: false
      },
      {
        question: 'What if there is an emergency?',
        answer: 'If there is an emergency please call 911 or visit your nearest veterinary clinic for any animal related issues. We also recommend contacting both your customer and support to keep up date on the situation.',
        open: false
      },
      {
        question: 'Do I have to take pictures or video of pets during a trip?',
        answer: 'We highly recommend taking pictures, video and also keeping in constant communication with your customers. This not only ensures safety but builds trust between you and the customers',
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
        question: "How can I become a Valet Driver?",
        answer:
          "Interesting in driving with us or expanding your transport business? Look no further, with our easy sign up and application process you can start driving and earning in no time! You must first past both our driver certification and background check and qualification criteria.",
        open: false,
      },
      {
        question: "Why should I become a Valet Driver?",
        answer:
          "You can make your own schedule and be your own boss while making uncapped earnings as a driver. You will also learn skills essential for operation and for your career.",
        open: false,
      },
      {
        question: "How long will it take for pawndr to review my profile?",
        answer: "You profile is reviewed between 3-5 working days.",
        open: false,
      },
      {
        question: "How do I verify my identity?",
        answer:
          "After applying to be a driver, we conduct a thorough background check and require both photo I.D, social security and social media account references. Once approved you will be verified.",
        open: false,
      },
      {
        question: "What are the service fees?",
        answer:
          "For drivers , we take 18% of every order you accept and complete. We also offer a $9.99 monthly subscription.",
        open: false,
      },
      {
        question: "What is pawndr?",
        answer:
          "Panwdr is a tech platform that connects drivers to customers for pick ups and deliveries for pets and livestock. We offer other services for pets animals and livestock. Check our app for updates on services you may need.",
        open: false,
      },
      {
        question: "What are Pawndr’s Terms of service?",
        answer:
          "Kindly visit our Terms of Service Page for answers to this question.",
        open: false,
      },
      {
        question: "Are drivers employees of Pawndr?",
        answer:
          "No, drivers are not employees of pawndr. Drivers are private contractors (1099) and operate under their own identities. Drivers are solely responsible for all services rendered.",
        open: false,
      },
      {
        question: "How can I contact Pawndr Support?",
        answer:
          "You can contact Pawndr support at support@gopawndr.com for any questions, concerns or just to say hi! We don’t bite.",
        open: false,
      },
      {
        question: "How can I view my profile? ",
        answer:
          "On our dedicated app, you can edit and update your profile by a click on the edit profile on pawndr app, edit your profile and save.",
        open: false,
      },
      {
        question: "How can I manage my Calendar?",
        answer:
          "You can manage your calendar on your driver app. Navigate to the calendar menu on the sidebar, set days when you will be available to get booking and days you will be unavailable.",
        open: false,
      },
      {
        question: "How can I manage my inbox?",
        answer:
          "On pawndr’s dedicated app, you can manage your inbox, by navigating to the inbox section on the sidebar, read messages, also get booking notifications.",
        open: false,
      },
      {
        question: "How do I issue an invoice or be available for repeat booking?",
        answer:
          "You can issue invoice to a pet or livestock owner on our dedicated app, by sending it directly to their emails and also as SMS.",
        open: false,
      },
      {
        question: "How can I view my total earnings?",
        answer:
          "Navigate, to the statistics menu of the sidebar, navigate to check earnings, earnings expected, etc.",
        open: false,
      },
      {
        question:
          "What can I do if I have concerns about the wellbeing of a pet or livestock in my car?",
        answer:
          "We recommend always, to contact your customer directly if you have any questions or concerns. Drivers can also contact support for any questions on how to handle situations and or concerns about a specific pet, animal or livestock. Please do not ignore a serious or unusual situation. Using common sense is an essential part of being both and excellent driver and solving problems.",
        open: false,
      },
      {
        question: "What if there is an emergency?",
        answer:
          "If there is an emergency please call 911 or visit your nearest veterinary clinic for any animal related issues. We also recommend contacting both your customer and support to keep up date on the situation.",
        open: false,
      },
      {
        question: "Do I have to take pictures or video of pets during a trip?",
        answer:
          "We highly recommend taking pictures, video and also keeping in constant communication with your customers. This not only ensures safety but builds trust between you and the customers",
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
  