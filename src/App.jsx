//import { BrowserRouter, Route, Switch } from 'react-router-dom';
 //components
 import Nav from './components/Nav.jsx'
 import { Route, Routes } from 'react-router'
 import StudentTable  from './components/students.jsx'
function App() {
 

  return (
    <>
    <div className="main">
    <Nav />
    <div className="view">
    <Routes>
        <Route path='/students' element={<StudentTable/>}/>
      </Routes>
      
      <hr />
    </div>
    </div>
     
    </>
  )
}

export default App
