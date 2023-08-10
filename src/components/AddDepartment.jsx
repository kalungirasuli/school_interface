import axios from 'axios';
import { useState } from 'react';

export default function AddDepartment() {
  const [departmentName, setDepartmentName] = useState('');
  const [headOfDepartment, setHeadOfDepartment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDepartmentNameChange = (e) => {
    setDepartmentName(e.target.value);
  };

  const handleHeadOfDepartmentChange = (e) => {
    setHeadOfDepartment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newData = {
        departmentName: departmentName,
        headOfDepartment: headOfDepartment,
      };

      await axios.post('https://schoolapi-op58.onrender.com/v1/departments', newData);

      // Optionally, you can reset the form after successful submission
      setDepartmentName('');
      setHeadOfDepartment('');
      setErrorMessage('');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setErrorMessage('Department with the same name already exists.');
      } else {
        setErrorMessage('Error adding data. Please try again later.');
      }
    }
  };

  return (
    <>
                        <br />
                        <h2 style={{ marginLeft: 150 }}> Create Department</h2>
                        <br />
                        Department Name:
                        <form onSubmit={handleSubmit} className="form-inline" >
                            <div >
                            <input type="text" value={departmentName} onChange={handleDepartmentNameChange} />
                            </div>
                            Head of Department:
                            <div >
                            <input type="text" value={headOfDepartment} onChange={handleHeadOfDepartmentChange} />
                            </div>
                            <button >Add Department</button>
                        </form>
                        {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}
