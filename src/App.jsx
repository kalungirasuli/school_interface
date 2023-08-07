
import { Route, Routes } from 'react-router'
import Staff from './components/Stafftable.jsx'
import React from 'react'
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
 //components
 import Nav from './components/Nav.jsx'
 import Courses from './components/Courses.jsx'
 import Clubs from './components/Clubs.jsx';

 //import Courses from './components/Courses.jsx'
function App() {
 

  return (
    <>
    <div className="main">
    <Nav />
    <div className="view">

      <Routes>
        <Route path='/staff' element={<Staff/>}/>
        <Route path='/clubs' element={<Clubs/>}/>
      </Routes>
    
          
    </div>
    </div>
     
    </>
  )
}

export default App
