import { Link } from "react-router-dom"

function Nav() {
  return (
    <>
      
      <div className="nav">
        <ul>
            <li className="logo">SCHOOL</li>
            <li>Home</li>
            <li> <Link to='/staff'  className="links">Staff</Link></li>
            <li> <Link to='/students'  className="links">Students</Link></li>
            <li> <Link to ="/clubs"  className="links">Clubs</Link> </li>
            <li> <Link to='/departments' className="links">Departments</Link></li>
            <li><Link to="/courses" className="links">Courses</Link></li> 

        </ul>
      </div>
    </>
  )
}
export default Nav