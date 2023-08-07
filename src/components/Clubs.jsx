import React from "react";
import {useState, useEffect} from "react";

function Clubs() {
    const [clubData, setClubData] = useState([]);

    const fetchClubs = () => {
        //get data from the db
        fetch('https://schoolapi-op58.onrender.com/v1/clubs/')
            .then(response => response.json())
            .then(data => {
                setClubData(data);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }

    useEffect(() => {
        fetchClubs();
    }, []);

    return(
        <>
         <h3>Clubs</h3>
      <hr />
        <table>
            <thead>
                <tr>
                    <th>Club</th>
                    <th>Head of Club</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {clubData.map(item => (
                    <tr key={item.id}>
                        <td>{item.clubName}</td>
                        <td>{item.headOfClub}</td>
                        <td>
                            <button className='edit'>Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
export default Clubs;