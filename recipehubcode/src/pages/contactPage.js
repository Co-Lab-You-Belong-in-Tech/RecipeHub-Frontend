import ContactForm from '../components/contactForm';
import React, { useState } from 'react';
import { curRentState } from '../assets/pageTitles';
import { Container } from 'react-bootstrap';

const ContactPage = () => {
  //eslint-disable-next-line
  const [currentState, setCurrentState] = useState({ ...curRentState });
  return (
    <Container
      style={{
        border: '2px solid blue',
        padding: '5px',
        boxShadow: '2px 2px grey',
      }}
    >
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>
        {currentState.contact.title}
      </h1>
      <ContactForm />
    </Container>
  );
};

export default ContactPage;
