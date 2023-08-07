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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Department Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((staff) => (
            <tr key={staff._id}>
              <td>{staff._id}</td>
              <td>{staff.departmentName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={{color: "red"}} >
        <Link to=''> +Add</Link>
      </button>
    </>
  );
}
