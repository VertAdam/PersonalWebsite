import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import working from '../../../../assets/working.jpg';
import headshot from '../../../../assets/headshot.jpg';
// import presenting from '../../../../assets/1606205154641.jfif';
import {RiGithubLine, RiLinkedinLine} from 'react-icons/ri';

const constants = {
  INTRO: '👋 Hello! My name is',
  HEADING: "Adam Vert.",
  SUBHEADING: "I'm a student at the University of Waterloo and a passionate Data Scientist.",
  ICONS: [
    {
      component: <RiGithubLine size={50} fill='#FFFFFF'/>,
      url: 'https://github.com/VertAdam'
    },
    {
      component: <RiLinkedinLine size={50} fill='#FFFFFF'/>,
      url: 'https://www.linkedin.com/in/adamvert'
    }
  ]
}

const Header = () => (
  <Container
    fluid
    className="text-light pt-5 pb-5"
    style={{
      background: 'linear-gradient(90deg, #524AB9 0%, #1CA2C0 100%)'
    }}
  >
    <Row className='pt-5 pb-5'>
      <Col md={8} className='pt-5 pb-5 mx-auto'>
        <Row>
          <Col md={12} lg={6} className='my-auto'>
            <h4
              className='display-5 text-light'
            >
              {constants.INTRO}
            </h4>
            <h1 className="display-3">{constants.HEADING}</h1>
            <h4 className="display-5 mb-3">{constants.SUBHEADING}</h4>
            {
              constants.ICONS.map(({component, url}, id) => (
                <a className='mr-2' href={url} key={`header-icon-${url}-${id}`} target='_blank'>
                  {component}
                </a>
              ))
            }
          </Col>
          <Col md={6} className='my-auto d-none d-lg-block'>
            <Image
              src={working}
              roundedCircle
              fluid
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Header
