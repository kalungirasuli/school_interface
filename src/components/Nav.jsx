import { Link } from "react-router-dom"

function Nav() {
  return (
    <>
      <div className="nav">
        <ul>
            <li className="logo">SCHOOL</li>
            <li>Home</li>
            <li> <Link to='/staff'>Staff</Link></li>
            <li>Students</li>
            <li>Clubs</li>
            <li>Departments</li>
            <li>Courses</li> 
        </ul>
      </div>
    </>
  )
}
export default Nav