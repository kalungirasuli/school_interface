import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function EditDepartment() {
  const { id } = useParams();

  const [departmentName, setDepartmentName] = useState('');

  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://schoolapi-op58.onrender.com/v1/departments/${id}`);
      setData(response.data);
      setDepartmentName(response.data.departmentName);
      // Set other state variables for other fields if needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleDepartmentNameChange = (e) => {
    setDepartmentName(e.target.value);
  };


  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const updatedData = { ...data, departmentName: departmentName };

      await axios.put(`https://schoolapi-op58.onrender.com/v1/departments/${id}`, updatedData);
      fetchData(); 
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <>
      <form>
        <input type="text" value={departmentName} onChange={handleDepartmentNameChange} />
        

        <button onClick={handleSave}>Save</button>
      </form>
    </>
  );
}
