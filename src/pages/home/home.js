import CodingFootage from '../video/Pexels Videos 2278095.mp4';
import MyPhoto from '../photo/circle-cropped.png';
import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import MyResume from '../resumeFile/my_resume.pdf';


function HomeContent() {
  return (
    <div className='bodyD'>
      <video autoPlay loop muted style={{
        position: 'absolute',
        filter: 'brightness(10%)',
        width: '100%',
        objectFit: 'cover',
        height: '100%',
        zIndex: '-1',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <source src={CodingFootage} type="video/mp4" />
      </video>
      <p style={{
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Bebas Neue',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>Looking for a full-stack, front and back end web developer?</p>
      <p style={{
        color: 'white',
        textAlign: 'center',
        fontSize: '50px',
        fontFamily: 'Bebas Neue',
        fontWeight: 'bold'
      }}>L O O K &nbsp; N O &nbsp; F U R T H E R</p>
      <img src={MyPhoto} alt='me.png' style={{
        height: '125px',
        width: '125px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}></img>
      <p style={{
        color: 'white',
        textAlign: 'center',
        fontSize: '20px',
        fontFamily: 'Bebas Neue',
        fontWeight: 'bold'
      }}>Christian Parks, Full Stack Web Developer</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Row>
          <Col>
            <Button href='/projects' color='info' style={{
              fontFamily: 'Bebas Neue',
              fontSize: '20px'
            }}>Projects</Button>
          </Col>
          <Col>
            <Button href={MyResume} color='info' style={{
              fontFamily: 'Bebas Neue',
              fontSize: '20px',
            }}>Resume</Button>
          </Col>
          <Col>
            <Button href='/contact' color='info' style={{
              fontFamily: 'Bebas Neue',
              fontSize: '20px'
            }}>Contact</Button>
          </Col>
        </Row>

      </div>
      <br></br>
    </div>
  );
}

export default HomeContent;