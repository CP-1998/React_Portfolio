import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeContent from './pages/home/home.js'
import ProjectContent from './pages/projects/projects'
import ContactContent from './pages/contact/contact';
import MyResume from './pages/resumeFile/my_resume.pdf'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <HomeContent />
          </Route>
          <Route path='/projects'>
            <ProjectContent />
          </Route>
          <Route path='/contact'>
            <ContactContent/>
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
