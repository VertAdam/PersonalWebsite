import React from 'react';
// import resume from '../../../../public/resume.pdf';
import { Container, Row, Col } from 'react-bootstrap';

const constants = {
  HEADING: 'Resume'
};

const Resume = () => (
  <Container
    fluid
    style={{
      background: 'linear-gradient(90deg, #524AB9 0%, #1CA2C0 100%)'
    }}
    className="text-light pb-5"
  >
    <Row className=''>
      <Col md={8} className='mx-auto text-center'>
        <h1 className="display-3 mb-5">{constants.HEADING}</h1>
        <iframe
          style={{
            width: '70%',
            height: '1020px'
          }}
          name='Adam Vert Resume'
          src='https://drive.google.com/file/d/1GIGnuR7Ii2T_-uNgbmsUqTbe954Tq5BM/preview'>
        </iframe>
      </Col>
    </Row>
  </Container>
);

export default Resume;
