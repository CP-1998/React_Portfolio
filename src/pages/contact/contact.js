import CodingFootage from '../video/Pexels Videos 2278095.mp4';
import { Button, Row, Col } from 'reactstrap'
import copyToClipboard from '../components/emailCopyBtn.js'
import ToolTipEmail from '../components/tooltipComp.js'
import './contact.css'


function ContactContent() {
  return (
    <div class='bodyD'>

      <video className='autoVid' autoPlay loop muted>
        <source src={CodingFootage} type="video/mp4" />
      </video>

      <div class='buttonDiv'>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Row>
          <Col>
            <Button className='selectorStyle' href='https://github.com/CP-1998' color='info'>G I T H U B</Button>
          </Col>
          <Col>
            <Button href='./#/' color='primary' style={{
              fontFamily: 'Playfair Display SC, serif',
              fontSize: '13px'
            }}>R E T U R N</Button>
            <br></br>
            <br></br>
            <Button className='selectorStyle' color='info' id='emailBtn' onClick={copyToClipboard}>E M A I L</Button>
            <ToolTipEmail />
          </Col>
          <Col>
            <Button className='selectorStyle' href='www.linkedin.com/in/cp1998' color='info'>L I N K E D I N</Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ContactContent;