import React, { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h2>Guest List</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
      {guests.map((g) => (
        <li key={g}>{g}</li>
      ))}
    </div>
  );
};

export default GuestList;
