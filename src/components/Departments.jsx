import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Departments() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://schoolapi-op58.onrender.com/v1/departments');
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
      await axios.delete(`https://schoolapi-op58.onrender.com/v1/departments/${id}`);
      setData((prevData) => prevData.filter((department) => department._id !== id));
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };


  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Department Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((department) => (
            <tr key={department._id}>
              <td>{department._id}</td>
              <td>{department.departmentName}</td>
              <td>
                <Link to={`/departments/${department._id}`}>Edit</Link>
                <button onClick={() => handleDelete(department._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>
        <Link to='/AddDepartment'>Add</Link>
      </button>
    </>
  );
}
