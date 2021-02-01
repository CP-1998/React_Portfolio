import CodingFootage from '../video/Pexels Videos 2278095.mp4';
import { Button, Row, Col } from 'reactstrap'
import copyToClipboard from '../components/emailCopyBtn.js'
import ToolTipEmail from '../components/tooltipComp.js'


function ContactContent() {
  return (
    <div className='bodyD' style={{
      textAlign: 'center',
      marginTop: 'auto'
    }}>
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
      <div style={{
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Row>
          <Col>
            <Button href='https://github.com/CP-1998' color='info' style={{
              fontFamily: 'Bebas Neue',
              fontSize: '25px'
            }}>G I T H U B</Button>
          </Col>
          <Col>
            <Button href='/' color='primary' style={{
              fontFamily: 'Bebas Neue'
            }}>R E T U R N</Button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button color='info' id='emailBtn' onClick={copyToClipboard} style={{
              fontFamily: 'Bebas Neue',
              fontSize: '25px'
            }}>E M A I L</Button>
            <ToolTipEmail/>
          </Col>
          <Col>
            <Button href='https://www.linkedin.com/in/christian-parks-89395b1b7/' color='info' style={{
              fontFamily: 'Bebas Neue',
              fontSize: '25px'
            }}>L I N K E D I N</Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ContactContent;