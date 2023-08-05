import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import './App.css'
import { DoubleNavbar } from './component/sidebar'
import { TableSelection } from './component/club'
import { DeptSelection } from './component/department'


function App() {


  return (
    <>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<DoubleNavbar />} />
           <Route path='/Clubs' element={<TableSelection />} />
           <Route path='/Departments' element={<DeptSelection />} />
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
