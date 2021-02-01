import CodingFootage from '../video/Pexels Videos 2278095.mp4'

function ResumeContent() {
  return (
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
  )
}

export default ResumeContent;