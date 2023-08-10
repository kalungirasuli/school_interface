//import React from 'react'
import { Route, Routes } from "react-router";

//components


import Staff from "./staff/useCases/viewStaff/Stafftable.jsx";
import Nav from "./components/Nav.jsx";
import Clubs from "./clubs/useCases/viewClubs/Clubs.jsx";
import Courses from "./courses/useCases/viewCourses/Courses.jsx";
import StudentTable from "./students/useCases/viewStudents/students.jsx";
import AddDepartment from "./departments/useCases/registerDepartments/AddDepartment.jsx";
import EditDepartment from "./departments/useCases/updateDepartment/EditDepartment.jsx";
import Departments from "./departments/useCases/viewDepartments/Departments.jsx";
import AddClub from "./clubs/useCases/registerClubs/AddClub.jsx";
import AddCoures from "./courses/useCases/registerCourses/AddCoures.jsx";
import EditStaff from "./staff/useCases/updateStaff/EditStaff.jsx";
import AddStaff from "./staff/useCases/registerStaff/AddStaff.jsx";
import EditClub from "./clubs/useCases/updateClub/EditClub.jsx";
import Student from './students/useCases/registerStudent/AddStudent.jsx';
import EditStudent from './students/useCases/updateStudent/EditStudent.jsx'

function App() {
  return (
    <>
      <div className="main">
        <Nav />
        <div className="view">

          <Routes>
          
            <Route path="/staff/:id" element={<EditStaff />} />
            <Route path="/AddStaff" element={<AddStaff />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/students" element={<StudentTable />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/clubs/:id" element={<EditClub />} /> 
            <Route path="/courses" element={<Courses />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/departments/:id" element={<EditDepartment />} />
            <Route path="/AddDepartment" element={<AddDepartment />} />
            <Route path="/add/club" element={<AddClub />} /> 
            <Route path="/AddCoures" element={<AddCoures />} />
            <Route path='/AddStudent' element={<Student/>} />
            <Route path='/student/:id' element={<EditStudent />} />

          </Routes>


        </div>
      </div>


    </>
  );
}

export default App;
