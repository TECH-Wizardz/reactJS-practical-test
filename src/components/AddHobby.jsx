import React, { useState } from "react";
import createHobby from "../firebase/FirebaseConfig";
function AddHobby() {
  const [hobby, setHobby] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setHobby(value);
  };

  const handlehobby = async () => {
    try {
      const hobbyId = await createHobby(hobby);
      console.log("hobby created successfully with ID:", hobbyId);
    } catch (e) {
      console.error("Error creating habbit:", e);
    }
  };
  return (
    <div>
      <div className="px-4 py-3 bg-bg-blue-color rounded-md">
        <label className="text-md block" htmlFor="hobby ">
          Name
        </label>
        <input
          type="text"
          id="hobby"
          name="hobby"
          value={hobby}
          onChange={handleChange}
          className="px-2 py-1 mt-1 border-2 border-blue-500 rounded-md"
        />
      </div>
      <button
        onClick={handlehobby}
        className="py-1 px-2 bg-red-400 rounded w-[200px]"
      >
        submit
      </button>
    </div>
  );
}

export default AddHobby;
