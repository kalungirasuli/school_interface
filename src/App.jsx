
import { Route, Routes } from 'react-router'
import Staff from './components/Stafftable.jsx'

//import { BrowserRouter, Route, Switch } from 'react-router-dom';
 //components
 import Nav from './components/Nav.jsx'
 import Courses from './components/Courses.jsx'
 import Clubs from './components/Clubs.jsx';

function App() {
 

  return (
    <>
    <div className="main">
    <Nav />
    <div className="view">
      {/* <h3> Staff</h3>
      <hr /> */}
      <Routes>
        <Route path='/staff' element={<Staff/>}/>
        <Route path='/clubs' element={<Clubs/>}/>
        <Route path='/Courses' element={<Courses/>}/>
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
