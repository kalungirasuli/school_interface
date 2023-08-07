import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function EditStaff() {
  const { id } = useParams();

  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState({});
  const [email, setEmail] = useState('');

  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://schoolapi-op58.onrender.com/v1/staff/${id}`);
      setData(response.data);
      setFirstName(response.data.firstName);
      setSecondName(response.data.secondName)
      setGender(response.data.gender)
      setAge(response.data.age)
      setEmail(response.data.email)
      // Set other state variables for other fields if needed

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleSecondNameChange = (e) => {
    setSecondName(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const updatedData = { 
        ...data, 
        firstName: firstName,
        secondName: secondName,
        gender: gender,
        age: age,
        email:email  
    };

      await axios.put(`https://schoolapi-op58.onrender.com/v1/staff/${id}`, updatedData);
      fetchData(); 
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <>
      <form>
        <input type="text" value={firstName} onChange={handleFirstNameChange} />
        <input type="text" value={secondName} onChange={handleSecondNameChange} />
        <input type="text" value={gender} onChange={handleGenderChange} />
        <input type="text" value={age} onChange={handleAgeChange} />
        <input type="text" value={email} onChange={handleEmailChange} />
        <button onClick={handleSave}>Save</button>
      </form>
    </>
  );
}
