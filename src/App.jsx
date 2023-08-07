//import React from 'react'
import { Route, Routes } from 'react-router'

//components
import Staff from './components/Stafftable.jsx'
import Nav from './components/Nav.jsx'
import Clubs from './components/Clubs.jsx';
import Courses from './components/Courses.jsx'
import StudentTable from './components/students.jsx'
function App() {


  return (
    <>
      <div className="main">
        <Nav />
        <div className="view">

          <Routes>
            <Route path='/staff' element={<Staff />} />
            <Route path='/students' element={<StudentTable />} />
            <Route path='/clubs' element={<Clubs />} />
            <Route path='/courses' element={<Courses />} />

          </Routes>


        </div>
      </div>

    </>
  )
}

export default App
