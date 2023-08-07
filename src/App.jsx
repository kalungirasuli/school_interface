//import { BrowserRouter, Route, Switch } from 'react-router-dom';
 //components
 import Nav from './components/Nav.jsx'
 import StudentTable  from './components/students.jsx'
function App() {
 

  return (
    <>
    <div className="main">
    <Nav />
    <div className="view">
      <h3> TITLE</h3>
      <StudentTable/>
      <hr />
    </div>
    </div>
     
    </>
  )
}

export default App
