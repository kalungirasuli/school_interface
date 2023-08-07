import React from 'react'
//import { BrowserRouter, Route, Switch } from 'react-router-dom';

 //components
 import Nav from './components/Nav.jsx'
 import Courses from './components/Courses.jsx'
function App() {
 

  return (
    <>
    <div className="main">
    <Nav />
    <div className="view">
    
            <h3> TITLE</h3>
            <hr />
            <Courses />
        
    </div>
    </div>
     
    </>
  )
}

export default App
