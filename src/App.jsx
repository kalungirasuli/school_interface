//import { BrowserRouter, Route, Switch } from 'react-router-dom';
 //components
 import Nav from './components/Nav.jsx'
 import StudentTable  from './components/students.jsx'

 import Courses from './components/Courses.jsx'
 import Clubs from './components/Clubs.jsx';

function App() {
 

  return (
    <>
    <div className="main">
    <Nav />
    <div className="view">

      
      <StudentTable/>
      <hr />

      {/* <h3> Staff</h3>
      <hr /> */}
      <Routes>
        <Route path='/staff' element={<Staff/>}/>
        <Route path='/clubs' element={<Clubs/>}/>
      </Routes>
    
            {/* <h3> TITLE</h3>
            <hr />
            <Courses /> */}
    </div>
    </div>
     
    </>
  )
}

export default App
