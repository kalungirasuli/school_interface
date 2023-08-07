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
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://schoolapi-op58.onrender.com/v1/staff/${id}`);
      setData((prevData) => prevData.filter((staff) => staff._id !== id));
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

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
            <th>Action</th>
            <th>Action</th>
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
              <td>
              <Link to={`/staff/${staff._id}`}><button>Edit</button></Link>
              </td>
              <td>
              <button onClick={() => handleDelete(staff._id)}>Delete</button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add" >
        <Link to='/AddStaff'  className="addtext"> +Add</Link>
      </button>
    </>
  );
}
