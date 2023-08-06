import { Route, Routes } from 'react-router'
import Staff from './components/Stafftable.jsx'
 //components
 import Nav from './components/Nav.jsx'
function App() {
 

  return (
    <>
    <div className="main">
    <Nav />
    <div className="view">
      <h3> Staff</h3>
      <hr />
      <Routes>
        <Route path='/staff' element={<Staff/>}/>
      </Routes>
    </div>
    </div>
     
    </>
  )
}

export default App
