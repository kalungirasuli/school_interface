import axios from 'axios';
import { useState } from 'react';

export default function AddStaff() {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newData = {
                firstName: firstName,
                secondName: secondName,
                gender: gender,
                age: age,
                email: email
            };

            await axios.post('https://schoolapi-op58.onrender.com/v1/staff', newData);

            // Optionally, you can reset the form after successful submission
            setFirstName('');
            setSecondName('');
            setGender('');
            setAge(0);
            setEmail('');
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
            <div>
                <h3>Fill to add new staff</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" value={firstName} onChange={handleFirstNameChange} placeholder='Enter first name'/>
                    </div>
                    <div>
                    <input type="text" value={secondName} onChange={handleSecondNameChange} placeholder='Enter second name'/>
                    </div>
                    <div>
                    Male
                    <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
                    Female
                    <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
                    </div>
                    <div>
                    <label>
                        Age:
                        <input type="number" value={age} onChange={handleAgeChange} />
                    </label>
                    </div>
                   <div> 
                        <input type="text" value={email} onChange={handleEmailChange} placeholder='Enter email address'/>
                   </div>
                    <button>Register</button>
                </form>
            </div>

            {errorMessage && <p>{errorMessage}</p>}
        </>
    );
}
