
import { Link } from "react-router-dom"

function Nav() {
  return (
    <>
      <div className="nav">
        <ul>
            <li className="logo">SCHOOL</li>
            <li>Home</li>
            <li> <Link to='/staff'  className="links">Staff</Link></li>
            <li>Students</li>
            <li> <Link to ="/clubs"  className="links">Clubs</Link> </li>
            <li>Departments</li>
            <li><Link to="/courses" className="links">Courses</Link></li> 
        </ul>
      </div>
    </>
  )
}
export default Nav