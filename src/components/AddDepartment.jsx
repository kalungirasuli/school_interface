import axios from 'axios';
import { useState } from 'react';

export default function AddDepartment() {
  const [departmentName, setDepartmentName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDepartmentNameChange = (e) => {
    setDepartmentName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newData = {
        departmentName: departmentName,
      };

      await axios.post('https://schoolapi-op58.onrender.com/v1/departments', newData);

      // Optionally, you can reset the form after successful submission
      setDepartmentName('');
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
      <form onSubmit={handleSubmit}>
        <label>
          Department Name:
          <input type="text" value={departmentName} onChange={handleDepartmentNameChange} />
        </label>

        <button>Add Department</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}
