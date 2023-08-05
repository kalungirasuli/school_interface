
import { useState, useEffect } from 'react'
import './App.css'

function App() {
    
  const [allHouse, setAllHouse] = useState([]);
  
    useEffect(() => {
      fetch('https://schoolapi-op58.onrender.com/v1/clubs')
        .then(res => res.json())
        .then(data => setAllHouse(data))
    },[])

  return (
    <>
       {
       allHouse.map((house) => (
        <div key={house._id}>
          <h1>{house.name}</h1>
        </div>
       ))
       }
    </>
  )
}

export default App
