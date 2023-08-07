
import React from 'react';
import { useState, useEffect } from 'react';
function Courses() {
    const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    // Fetch data from the URL
    fetch('https://schoolapi-op58.onrender.com/v1/Courses/')
      .then(response => response.json())
      .then(data => {
        // Update the staff data state
        setStaffData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
 return(
  <>
   <h3>Course </h3>
      <hr />
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>CourseCode</th>
                <th>Department</th>
                <th>Duration</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
        {staffData.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.courseCode}</td>
            <td>{item.department}</td>
            <td>{item.duration}</td>
            <td>
              <button className='edit'>Edit</button>
            </td>
          </tr>
        ))}
        </tbody>
    </table>
  </>
 )
}
export default Courses;