import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Hyker from '../photo/hyker.png'
import Sorteo from '../photo/sorteo.png'
import Holipays from '../photo/holipays.png'
import './projects.css'


function ProjectContent() {
  return (
    <div class='mainDiv'>
      <br></br>
      <Row>
        <Col className='contentCol' sm="6">
          <Card body>
            <CardTitle tag="h5">Hyker Web App</CardTitle>
            <hr></hr>
            <img width="100%" src={Hyker} alt="hyker.png" />
            <CardText className='cardContent'>A simple application to help hikers find new trails to explore, powered by the Google Maps API</CardText>
            <hr></hr>
            <Button className='viewContent' href='https://nickdmrco.github.io/Project-1/' color='info'>C h e c k&nbsp; I t&nbsp; O u t!</Button>
            <br></br>
            <Button className='viewContent' href='https://github.com/nickdmrco/Project-1' color='info'>G i t h u b</Button>
          </Card>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col className='contentCol' sm="6">
          <Card body>
            <CardTitle tag="h5">Happy Holipays</CardTitle>
            <hr></hr>
            <img width="100%" src={Holipays} alt="holipays.png" />
            <CardText className='cardContent'>A minimalistic budgeting app with a festive twist! Includes a christmas countdown timer, and utilises Tween to create beautiful looking animations.</CardText>
            <hr></hr>
            <Button className='viewContent' href='https://pure-bayou-01842.herokuapp.com/index.html' color='info'>C h e c k&nbsp; I t&nbsp; O u t</Button>
            <br></br>
            <Button className='viewContent' href='https://github.com/stefanysanz/Project-2' color='info'>G i t h u b</Button>
          </Card>
        </Col>
      </Row>

      <br></br>
      <br></br>
      <Row>
        <Col className='contentCol' sm="6">
          <Card body>
            <CardTitle tag="h5">My Sorteo</CardTitle>
            <hr></hr>
            <img width="100%" src={Sorteo} alt="sorteo.png" />
            <CardText className='cardContent'>This application allows social media influencers to create an account, and set up giveaways and sweepstakes on a more transparent and user-focused platform. Built out with React, using MongoDB, Express and Node.JS for back-end needs.</CardText>
            <hr></hr>
            <Button className='viewContent' href='http://ec2-3-86-101-171.compute-1.amazonaws.com:3000/' color='info'>C h e c k&nbsp; I t&nbsp; O u t</Button>
            <br></br>
            <Button className='viewContent' href='https://github.com/stefanysanz/mysorteo' color='info'>G i t h u b</Button>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row className='contentCol'>
        <Button className='homeButton' href='./#/' color='primary'>Return</Button>
      </Row>
      <br></br>
      <br></br>
    </div>
  )
}

export default ProjectContent;
