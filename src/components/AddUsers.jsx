import React, { useState } from "react";
import PhoneNumberInput from "./PhoneNumberInput";
import createUser from "../firebase/FireStoreDB";
function AddUsers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;

      default:
        break;
    }
  };

  const handleuser = async () => {
    try {
      const userId = await createUser(name, email);
      console.log("user created successfully with ID:", userId);
    } catch (e) {
      console.error("Error creating user:", e);
    }
  };
  return (
    <div className="px-4 py-3 bg-bg-blue-color rounded-md">
      <div className="y-2">
        <label htmlFor="name" className="px-2 block">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          className="px-2 py-1 mt-1 border-2 border-blue-500 rounded-md"
        />
      </div>
      <div className="my-2">
        <label htmlFor="email" className="px-2 block">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="px-2 py-1 mt-1 border-2 border-blue-500 rounded-md"
        />
      </div>
      <PhoneNumberInput />
      <button
        onClick={handleuser}
        className="py-1 px-2 bg-red-400 rounded w-[200px]"
      >
        submit
      </button>
    </div>
  );
}

export default AddUsers;
