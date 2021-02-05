import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import HomeContent from './pages/home/home.js'
import ProjectContent from './pages/projects/projects.js'
import ContactContent from './pages/contact/contact.js';
import MyResume from './pages/resumeFile/my_resume.pdf'

const App = () => {
  return (
    <Router basename={window.location.pathname}>
      <div>
        <Switch>
          <Route exact path='/'>
            <HomeContent />
          </Route>
          <Route exact path='/projects'>
            <ProjectContent />
          </Route>
          <Route exact path='/contact'>
            <ContactContent />
          </Route>
          <Route path='/resume'>
            <MyResume />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
