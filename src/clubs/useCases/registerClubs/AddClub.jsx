import  { useState } from "react";
import axios from "axios";
//import InputText from "../../../components/microComponents/from/InputText";
import Toast from "../../../components/microComponents/from/Toast";
export default function AddClub() {
  const [name, setName] = useState("");
  const [headOfClub, setHeadOfClub] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const addClub = async (e) => {
    e.preventDefault();
    await axios
      .post("https://schoolapi-op58.onrender.com/v1/clubs/", {
        clubName: name,
        headOfClub: headOfClub,
      })
      .then(() => {
        setSuccess("Successfily added club");
        setName("");
        setHeadOfClub("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      {/* {success && <Toast message={success} color={"green"} />} */}

      {error && <Toast message={error} color={"red"} />}
      <form onSubmit={addClub}>
        <div>
          <label>Club Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Head of club</label>
          <input
            type="text"
            value={headOfClub}
            onChange={(e) => setHeadOfClub(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
