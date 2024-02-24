import React from 'react';

const ResidentList = ({ residents }) => {
  return (
    <div>
      <h3>Residents:</h3>
      <ul>
        {residents.map((resident, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {resident.name}</p>
            <p><strong>Height:</strong> {resident.height}</p>
            <p><strong>Mass:</strong> {resident.mass}</p>
            <p><strong>Gender:</strong> {resident.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResidentList;
