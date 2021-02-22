import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdSchool } from 'react-icons/md';

import onic from '../../../../assets/onic.png';
import stealth from '../../../../assets/stealth.png';
import nimbal from '../../../../assets/NiMBaL_Logo_bg-removebg-preview.jpg';
import projectneutral from '../../../../assets/projectNeutral1.png'
import cibc from '../../../../assets/cibc.png';
import eccc from '../../../../assets/eccc.png';
import uw from '../../../../assets/uw.png';

const constants = {
  HEADING: 'Timeline',
  EVENTS: [
    {
      type: 'job',
      date: 'January 2020 - Present',
      jobTitle: 'Full-Stack Developer',
      company: 'NiMBaL Research and Development Labs',
      description: 'Pipleline Creation/Managment, Algorithm Development, Data Analysis',
      logo: {
        alt: 'NiMBaL Lab',
        img: nimbal
      }
    },
    {
      type: 'job',
      date: 'January 2019 - December 2019',
      jobTitle: 'Data Scientist',
      company: 'Environment and Climate Change Canada',
      description: 'Automated Analytics, Machine Learning,GUI Creation',
      logo: {
        alt: 'ECCC',
        img: eccc
      }
    },
    {
      type: 'job',
      date: 'June 2018 - August 2018',
      jobTitle: 'Local Engagement Coordinator',
      company: 'Project Neutral',
      description: 'Marketing, Web Development',
      logo: {
        alt: 'ProjectNeutral',
        img: projectneutral
      }
    },
    {
      type: 'school',
      date: 'September 2017 - Present',
      jobTitle: 'Mathematical Physics Co-op',
      company: 'University of Waterloo',
      description: 'Theoretical Physics, Advanced Mathematics',
      logo: {
        alt: 'UW',
        img: uw
      }
    }
  ]
};

const Timeline = () => (
  <Container
    fluid
    style={{ backgroundColor: '#ebedef' }}
    className='pb-5'
  >
    <Row>
      <Col md={8} className='mx-auto text-center'>
        <h1 className="display-3">
          {constants.HEADING}
        </h1>
        <VerticalTimeline>
          {
            constants.EVENTS.map(({type, date, jobTitle, company, description, logo}, id) => (
              <VerticalTimelineElement
                key={`timeline-${id}`}
                className="vertical-timeline-element--work"
                contentStyle={{
                  borderRadius: '21px',
                  textAlign: 'left',
                }}
                contentArrowStyle={{ borderRight: '7px solid  #FFFFFF' }}
                date={date}
                iconStyle={{ background: '#2E77BD', color: '#FFFFFF' }}
                icon={type === 'job' ? <MdWork fill='#FFFFFF'/> : <MdSchool fill='#FFFFFF'/>}
              >
                <Row>
                  <Col md={8}>
                    <h4>{jobTitle}</h4>
                    <h5>{company}</h5>
                    <p>{description}</p>
                  </Col>
                  <Col md={4} className='d-none d-md-block'>
                    <img
                      alt={logo.alt}
                      src={logo.img}
                      style={{
                        margin: 'auto',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        width: '100px',
                        borderRadius: '20px'
                      }}
                    />
                  </Col>
                </Row>
              </VerticalTimelineElement>
            ))
          }
        </VerticalTimeline>
      </Col>
    </Row>
  </Container>
);

export default Timeline;
