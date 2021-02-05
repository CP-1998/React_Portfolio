import CodingFootage from '../video/Pexels Videos 2278095.mp4';
import MyPhoto from '../photo/circle-cropped.png';
import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import MyResume from '../resumeFile/Christian Parks Resume.pdf';
import './home.css'


function HomeContent() {
  return (
    <div>

      <video class='autoVid' autoPlay loop muted>
        <source src={CodingFootage} type="video/mp4" />
      </video>

      <p class='homePara'>Looking for a full-stack, front and back end web developer?</p>

      <p class='homePara'>L O O K &nbsp; N O &nbsp; F U R T H E R</p>

      <img class='myPhoto' src={MyPhoto} alt='me.png'></img>

      <p class='homePara'>Christian Parks, Full Stack Web Developer</p>

      <div class='buttonDiv'>
        <Row>
          <Col>
            <Button href='./#/projects' color='info'>Projects</Button>
          </Col>
          <Col>
            <Button href={MyResume} color='info'>Resume</Button>
          </Col>
          <Col>
            <Button href='./#/contact' color='info'>Contact</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HomeContent;