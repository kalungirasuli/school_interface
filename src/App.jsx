
 //components
import Nav from './components/Nav.jsx'
import StudentTable from './components/students.jsx'


function App() {
 

  return (
    <>
    <div className="main">
    <Nav />
    <div className="view">
      <StudentTable />
    </div>
    </div>
     
    </>
  )
}

export default App
