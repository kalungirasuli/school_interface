import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function EditDepartment() {
  const { id } = useParams();

  const [departmentName, setDepartmentName] = useState('');
  const [headOfDepartment, setHeadOfDepartment] = useState('');

  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://schoolapi-op58.onrender.com/v1/departments/${id}`);
      setData(response.data);
      setDepartmentName(response.data.departmentName);
      setHeadOfDepartment(response.data.headOfDepartment);
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

  const handleHeadOfDepartmentChange = (f) => {
    setHeadOfDepartment(f.target.value);
  };


  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const updatedData = { ...data, departmentName: departmentName, headOfDepartment: headOfDepartment };

      await axios.put(`https://schoolapi-op58.onrender.com/v1/departments/${id}`, updatedData);
      fetchData(); 
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <>
     <form onSubmit={handleSave}>
        <label>
          <div className="container-fluid">
                <div className='d-flex justify-content-center'>

                    <div className='col' >
                        <br />
                        <h2 style={{ marginLeft: 500 }}> Edit Department</h2>
                        <br />
                        Department Name:
                        <form onSubmit={handleSave} className="form-inline" >
                            <div >
                            <input type="text" value={departmentName} onChange={handleDepartmentNameChange} />
                            </div>
                            Head of Department:
                            <div >
                            <input type="text" value={headOfDepartment} onChange={handleHeadOfDepartmentChange} />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2" onClick={handleSave}>Edit</button>
                        </form>
                    </div>

                </div>
            </div>
        </label>

      </form>
    </>
  );
}
