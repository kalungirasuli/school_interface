import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Heading from '../../../components/microComponents/from/Heading'
import { Link } from "react-router-dom";

export default function EditStudent() {
    const { id } = useParams();

    const [student, setStudent] = useState({}); //this is commited due to error delection please fix it ....
    const [editStudent, setEditStudent] = useState({});

    const fetchData = async () => {
        try {
            const response = await fetch(`https://schoolapi-op58.onrender.com/v1/students/${id}`);
            if (!response.ok) {
                console.error('Error fetching data:', response.status);
                return;
            }
            const data = await response.json();
            setStudent(data);
            setEditStudent(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditStudent({ ...editStudent, [name]: value });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            await fetch(`https://schoolapi-op58.onrender.com/v1/students/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editStudent),
            });

            // Fetch the updated data again to refresh the view
            fetchData();
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <>
            <br />
            <br />
            <Heading heading="Fill in to edit Student Details" />
            <form>
                <div className="form-group">

                    <input type="text" id="editId" className="form-control" value={editStudent.id || ''} disabled />
                </div>
                <div className="form-group">

                    <input
                        type="text"
                        id="editFirstName"
                        name="firstName"
                        className="form-control"
                        value={editStudent.firstName || ''}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">

                    <input
                        type="text"
                        id="editSecondName"
                        name="secondName"
                        className="form-control"
                        value={editStudent.secondName || ''}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    Male
                    <input type="radio" name="gender" value="male" onChange={handleInputChange} />
                    Female
                    <input type="radio" name="gender" value="female" onChange={handleInputChange} />
                </div>
                <br />
                <br />

                <button style={{ marginLeft: 30, backgroundColor: 'red' }}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/Students" className="btn btn-success"> Cancel </Link>
                </button>
                <button type="submit" style={{ marginLeft: 40, backgroundColor: 'green', color: 'white' }} onClick={handleSave}>
                    Save
                </button>
            </form>
        </>
    );
}
