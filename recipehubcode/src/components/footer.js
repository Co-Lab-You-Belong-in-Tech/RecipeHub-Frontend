import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className='mt-5'>
      <Container fluid={true}>
        <Row className='border-top justify-content-center p-3'>
          <Col className='p-1' md={3} sm={12}>
            Co.Lab | You Belong In Tech!
          </Col>
          <Col className='p-1 d-flex justify-content-center' md={3}>
            Copyright @ 2021
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
