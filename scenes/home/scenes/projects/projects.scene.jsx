import React from 'react';
import {Container, Row, Col, Badge} from 'react-bootstrap';
import {MdOpenInNew} from 'react-icons/md';
import {RiGithubLine} from 'react-icons/ri';
import {FaAppStore} from 'react-icons/fa';
import {RiGooglePlayLine} from 'react-icons/ri';

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
      title: 'Onic Systems',
      description: 'Developed website for Onic Systems. A parent company of several technology companies.',
      bgImg: onic,
      icons: [
        {
          component: <MdOpenInNew fill='#2E77BD' size={20}/>,
          url: 'https://www.onicinc.com'
        }
      ],
      pills: ['React', 'Next.js', 'Bootstrap', 'Styled-Components']
    },
    {
      title: 'SimpleDirect',
      description: 'Developed website for SimpleDirect. A subsidiary company of Onic Systems.',
      bgImg: sd,
      icons: [
        {
          component: <MdOpenInNew fill='#2E77BD' size={20}/>,
          url: 'https://www.getsimpledirect.com'
        }
      ],
      pills: ['React', 'Next.js', 'Node', 'Express', 'PostgreSQL', 'Bootstrap', 'Styled-Components', 'Sendgrid']
    },
    {
      title: 'SimpleDirect Pro',
      description: 'Developed website, iOS app, and android app for SimpleDirect Pro. A subsidiary company of Onic Systems.',
      bgImg: sd,
      icons: [
        {
          component: <RiGooglePlayLine fill='#2E77BD' size={20}/>,
          url: 'https://play.google.com/store/apps/details?id=com.ccino.ccinoapp'
        },
        {
          component: <FaAppStore fill='#2E77BD' size={20} />,
          url: 'https://apps.apple.com/ca/app/onic-systems/id1487540329#?platform=iphone'
        },
        {
          component: <MdOpenInNew fill='#2E77BD' size={20}/>,
          url: 'https://www.simpledirectpro.com'
        }
      ],
      pills: ['React', 'Next.js', 'Node', 'Express', 'PostgreSQL', 'Sendgrid', 'Stripe', 'Twilio', 'React Native']
    },
    {
      title: 'Algorithmic Trading Bot',
      description: 'Developed Bot (at Stealth Startup) that buys and sells stocks using algorithmic trading strategies.',
      icons: [],
      bgImg: algotrading,
      pills: ['Python', 'NumPy', 'IBKR API', 'Polygon.io API', 'AlphaVantage API']
    },
    {
      title: 'Backtesting Software',
      description: 'Developed stocks backtesting software at Stealth Startup. Backtests technical trading strategies on 15 years worth of historical data.',
      icons: [],
      bgImg: backtest,
      pills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Zipline.io', 'Polygon.io API']
    },
    {
      title: 'Covid Tracking',
      description: 'Developed website to track the number of coronavirus cases in each country (and their corresponding states).',
      bgImg: covid,
      icons: [
        {
          component: <RiGithubLine fill='#2E77BD' size={20}/>,
          url: 'https://github.com/onicgroup/covid-tracking'
        },
        {
          component: <MdOpenInNew fill='#2E77BD' size={20}/>,
          url: 'https://www.covidtracking.org'
        }
      ],
      pills: ['React', 'PWA', 'Next.js', 'Node', 'Express', 'Analytics']
    },
    {
      title: 'Bravery',
      description: 'Developed website for Bravery. A subsidiary company of Onic Systems.',
      bgImg: bravery,
      icons: [
        {
          component: <MdOpenInNew fill='#2E77BD' size={20}/>,
          url: 'https://www.getbravery.com'
        }
      ],
      pills: ['React', 'Next.js', 'Node', 'Express', 'PostgreSQL', 'Sendgrid', 'Stripe']
    },
    {
      title: 'Personal Website',
      description: 'The page you are currently on. Developed website to showcase my work experience and past projects in greater detail.',
      bgImg: person,
      icons: [
        {
          component: <RiGithubLine fill='#2E77BD' size={20}/>,
          url: 'https://github.com/apanesar11/personal-website'
        },
        {
          component: <MdOpenInNew fill='#2E77BD' size={20}/>,
          url: 'http://localhost:3000'
        }
      ],
      pills: ['React', 'Next.js', 'Bootstrap', 'Styled Components']
    }
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
