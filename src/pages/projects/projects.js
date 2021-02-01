import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Hyker from '../photo/hyker.png'
import Sorteo from '../photo/sorteo.png'
import Holipays from '../photo/holipays.png'


function ProjectContent() {
  return (
    <div style={{
      backgroundColor: 'black'
    }}>
      <br></br>
      <Row>
        <Col sm="6" style={{
          margin: '0 auto',
          float: 'none',
          marginBottom: '10px'
        }}>
          <Card body>
            <CardTitle tag="h5" style={{
              textAlign: 'center',
              fontFamily: 'Bebas Neue',
              fontSize: '45px'
            }}>Hyker Web App</CardTitle>
            <hr></hr>
            <img width="100%" src={Hyker} alt="hyker.png" />
            <CardText style={{
              fontFamily: 'Bebas Neue',
              textAlign: 'center',
              fontSize: '30px'
            }}>A simple application to help hikers find new trails to explore, powered by the Google Maps API</CardText>
            <hr></hr>
            <Button href='https://nickdmrco.github.io/Project-1/' color='info' style={{
              fontFamily: 'Bebas Neue',
              fontSize: '20px',
            }}>C h e c k&nbsp; I t&nbsp; O u t!</Button>
            <br></br>
            <Button href='https://github.com/nickdmrco/Project-1' color='info' style={{
              fontFamily: 'Bebas Neue',
              fontSize: '20px'
            }}>G i t h u b</Button>
          </Card>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col sm="6" style={{
          margin: '0 auto',
          float: 'none',
          marginBottom: '10px'
        }}>
          <Card body>
            <CardTitle tag="h5" style={{
              textAlign: 'center',
              fontFamily: 'Bebas Neue',
              fontSize: '45px'
            }}>Happy Holipays</CardTitle>
            <hr></hr>
            <img width="100%" src={Holipays} alt="holipays.png" />
            <CardText style={{
              fontFamily: 'Bebas Neue',
              textAlign: 'center',
              fontSize: '26px'
            }}>A minimalistic budgeting app with a festive twist! Includes a christmas countdown timer, and utilises Tween to create beautiful looking animations.</CardText>
            <hr></hr>
            <Button href='https://pure-bayou-01842.herokuapp.com/index.html' color='info' style={{
              fontFamily: 'Bebas Neue',
              fontSize: '20px'
            }}>C h e c k&nbsp; I t&nbsp; O u t</Button>
            <br></br>
            <Button href='https://github.com/stefanysanz/Project-2' color='info' style={{
              fontFamily: 'Bebas Neue',
              fontSize: '20px'
            }}>G i t h u b</Button>
          </Card>
        </Col>
      </Row>

      <br></br>
      <br></br>
      <Row>
        <Col sm="6" style={{
          margin: '0 auto',
          float: 'none',
          marginBottom: '10px'
        }}>
          <Card body>
            <CardTitle tag="h5" style={{
              textAlign: 'center',
              fontFamily: 'Bebas Neue',
              fontSize: '45px'
            }}>My Sorteo</CardTitle>
            <hr></hr>
            <img width="100%" src={Sorteo} alt="sorteo.png" />
            <CardText style={{
              fontFamily: 'Bebas Neue',
              textAlign: 'center',
              fontSize: '26px'
            }}>This application allows social media influencers to create an account, and set up giveaways and sweepstakes on a more transparent and user-focused platform. Built out with React, using MongoDB, Express and Node.JS for back-end needs.</CardText>
            <hr></hr>
            <Button href='http://ec2-3-86-101-171.compute-1.amazonaws.com:3000/' color='info' style={{
              fontFamily: 'Bebas Neue',
              fontSize: '20px'
            }}>C h e c k&nbsp; I t&nbsp; O u t</Button>
            <br></br>
            <Button href='https://github.com/stefanysanz/mysorteo' color='info' style={{
              fontFamily: 'Bebas Neue',
              fontSize: '20px'
            }}>G i t h u b</Button>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Button href='/' color='primary' style={{
          margin: '0 auto',
          fontFamily: 'Bebas Neue',
          fontSize: '18px',
          width: '300px'
        }}>Return</Button>
      </Row>
      <br></br>
      <br></br>
    </div>
  )
}

export default ProjectContent;
