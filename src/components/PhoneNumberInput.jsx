import { useState } from "react";
import { createPhoneNumber } from "../firebase/FireStoreDB";
const PhoneNumberInput = () => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value.trim());
        break;
      case "number":
        setNumber(value.replace(/\D/g, "")); // Remove non-numeric characters
        break;
      default:
        break;
    }
  };

  const handlenumber = async () => {
    try {
      const phoneNumberId = await createPhoneNumber(phoneNumbers);
      console.log("hobby created successfully with ID:", phoneNumberId);
    } catch (e) {
      console.error("Error creating habbit:", e);
    }
  };

  const addPhoneNumber = () => {
    if (!name || !number) {
      setError("Please enter both Name and Phone Number.");
      return;
    }

    const formattedNumber = number.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3"
    ); // Format with parentheses and hyphens (optional)

    setPhoneNumbers([...phoneNumbers, { name, number: formattedNumber }]);
    setName("");
    setNumber("");
    setError("");
  };

  return (
    <div className="flex flex-col gap-4 mt-5 ">
      <h2>Add Phone Numbers</h2>
      <div>
        <label htmlFor="name" className="px-2 block">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
          className="px-2 py-1 mt-1 border-2 border-blue-500 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="number" className="px-2 block ">
          Phone Number:
        </label>
        <input
          type="tel"
          id="number"
          name="number"
          value={number}
          onChange={handleInputChange}
          className="px-2 py-1 mt-1 border-2 border-blue-500 rounded-md"
        />
      </div>
      {error && <p className="error">{error}</p>}
      <button
        onClick={addPhoneNumber}
        className="py-1 px-2 bg-blue-400 rounded w-[200px]"
      >
        Add Phone Number
      </button>
      <button
        onClick={handlenumber}
        className="py-1 px-2 bg-red-400 rounded w-[200px]"
      >
        submit
      </button>
      <ul>
        {phoneNumbers.map((phoneNumber, index) => (
          <li key={index}>
            {phoneNumber.name} - {phoneNumber.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneNumberInput;
