import React from 'react';
import {Container, Row, Col, Badge} from 'react-bootstrap';
import {RiGithubLine} from 'react-icons/ri';
import {GrYoutube} from 'react-icons/Gr';
import {FaRegFile} from 'react-icons/Fa';


import sd from '../../../../assets/sd.svg';
import bravery from '../../../../assets/bravery.svg';
import covid from '../../../../assets/covid.svg';
import onic from '../../../../assets/onic-2.svg';
import person from '../../../../assets/person.svg';
import backtest from '../../../../assets/backtest.svg';
import algotrading from '../../../../assets/algotrading.svg';

import { ProjectCard } from './projects.styles';

const constants = {
  HEADING: 'Recent Projects',
  PROJECTS: [
    {
      title: 'PianoKeyboard',
      description: 'Created a fully documented application that allows the user to use any digital instrument as a computer keyboard with personalized bindings.',
      bgImg: sd,
      icons: [
        {
          component: <RiGithubLine fill='#2E77BD' size={20}/>,
          url: 'https://github.com/VertAdam/PianoKeyboard'
        },
        {
          component: <GrYoutube fill='#2E77BD' size={20}/>,
          url: 'https://youtu.be/isl14TeM6GY'
        }
      ],
      pills: ['Python','Windows Backend', 'GUI', 'Automated', 'Fully Documented', 'Virtual-Key Codes']
    },
    {
      title: 'Cooking Time Application',
      description: 'At a McGill Physics Hackathon, we created a website that allows you to take a picture of raw meat and determine how long it needs to be cooked.',
      bgImg: backtest,
      icons: [
        {
          component: <RiGithubLine fill='#2E77BD' size={20}/>,
          url: 'https://github.com/udchemen/mathther-chefs'
        },
        {
          component: <GrYoutube fill='#2E77BD' size={20}/>,
          url: 'https://www.youtube.com/watch?v=2NeoYfqZZR8&ab_channel=AdamVert'
        }
      ],
      pills: ['Python', 'JavaScript', 'C','Google Vision API', 'Machine Learning', 'Dimensional Analysis', 'Thermal Physics']
    },
    {
      title: 'Cloud/Fog Detection Algorithm',
      description: 'Developed and optimized currently used cloud/fog detection algorithms. Note that machine learning optimizations have been incorporated since the report linked was created.',
      icons: [{
          component: <FaRegFile fill='#2E77BD' size={20}/>,
          url: 'https://drive.google.com/file/d/1FNHXAzd_zi1gIuVZaJ0IG2qbo9TCOy82/view?usp=sharing'
        }],
      bgImg: algotrading,
      pills: ['Python', 'Linux', 'Bash', 'Shell-Scripting', 'Machine Learning','Pipeline Creation','Live-data Pipeline','Meteorology','Physics']
    },
    {
      title: 'Garmin Mapping Application',
      description: 'Currently Developing a application that uses Garmin watch activity data and creates advanced analytics and interactive maps for users.',
      bgImg: sd,
      icons: [],
      pills: ['Python','JavaScript','Google Maps API','GUI', 'Live Mapping', 'Geographical Analysis', 'Heatmaps', 'Time-Series Mapping', 'Advanced Analytics']
    },
    {
      title: 'Flamebreak Item Detection',
      description: 'Created an application that will automatically detect a characters items, class and stats used while playing the steam game Flamebreak using image recognition.',
      icons: [],
      bgImg: person,
      pills: ['Python', 'Google Vision API', 'Backend Process','Image recognition']
    },
    {
      title: 'Environment Canada Pipeline',
      description: 'Created a new pipeline for Environment Canada that efficiently stored and retrieved billions of data points from all current and historic weather data.',
      bgImg: algotrading,
      icons: [],
      pills: ['Pipeline', 'Database Managment', 'Big Data', 'Automated']
    },
  ]
}

const Projects = () => {

  const renderIcons = icons => (
    <div className='d-inline-block w-25 text-right align-top'>
      {
        icons.map(({component, url}, id) => (
          <a className='ml-2' href={url} key={`project-icon-${url}-${id}`} target='_blank'>
            {component}
          </a>
        ))
      }
    </div>
  );

  const renderPills = (title, pills) => (
    <span>
      {
        pills.map((pill, id) => (
          <span
            key={`${title}-pill-${id}`}
          >
            <Badge pill style={{backgroundColor: '#2E77BD', color: 'white'}}>
              {pill}
            </Badge>{' '}
          </span>
        ))
      }
    </span>
  )

  return(
    <Container
      fluid
      style={{ backgroundColor: '#ebedef' }}
      className='pb-5'
    >
      <Row>
        <Col md={8} className='mx-auto text-center'>
          <h1
            className="display-3 mb-5 font-weight-bold"
            style={{
              color: '#797979'
            }}
          >{constants.HEADING}</h1>
        </Col>
      </Row>
      <Row>
        <Col md={10} className='mx-auto'>
          <Row>
            {
              constants.PROJECTS.map(({title, description, bgImg, icons, pills}, id)=> (
                <Col
                  key={`project-${title}-${id}`}
                  lg={12}
                  xl={6}
                  className='mb-4 position-relative'
                >
                  <ProjectCard
                    className=' p-4'
                    image={bgImg}
                  >
                    <div className='d-inline-block w-75'>
                      <h4 className='font-weight-bold mb-4' style={{fontSize: '25px'}}>{title}</h4>
                      <h5
                        style={{
                          fontSize: '18px',
                          backgroundColor: 'white',
                          borderRadius: '20px'
                        }}
                        className='mb-4'
                      >{description}</h5>
                      {renderPills(title, pills)}
                    </div>
                    {renderIcons(icons)}
                  </ProjectCard>
                </Col>
              ))
            }
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
