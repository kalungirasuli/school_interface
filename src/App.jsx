//import { BrowserRouter, Route, Switch } from 'react-router-dom';
 //components
 import Nav from './components/Nav.jsx'
 import { Route, Routes } from 'react-router'
 import StudentTable  from './components/students.jsx'

 //import Courses from './components/Courses.jsx'
 import Clubs from './components/Clubs.jsx';
 import Staff from './components/Stafftable.jsx';

function App() {
 

  return (
    <>
    <div className="main">
    <Nav />
    <div className="view">
      <h3> TITLE</h3>
      
      <hr />

      {/* <h3> Staff</h3>
      <hr /> */}
      <Routes>
        <Route path='/staff' element={<Staff/>}/>
        <Route path='/students' element={<StudentTable/>}/>
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
