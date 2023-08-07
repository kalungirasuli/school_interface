import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Staff() {
 
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://schoolapi-op58.onrender.com/v1/staff');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
     <h3>Staff </h3>
      <hr />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Second Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((staff) => (
            <tr key={staff._id}>
              <td>{staff._id}</td>
              <td>{staff.firstName}</td>
              <td>{staff.secondName}</td>
              <td>{staff.gender}</td>
              <td>{staff.age}</td>
              <td>{staff.email}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add" >
        <Link to=''  className="addtext"> +Add</Link>
      </button>
    </>
  );
}
