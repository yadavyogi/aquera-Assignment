import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResidentList from './ResidentList';

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const promises = planet.residents.map(residentUrl => axios.get(residentUrl));
      const responses = await Promise.all(promises);
      const residentData = responses.map(response => response.data);
      setResidents(residentData);
    };
    fetchResidents();
  }, [planet.residents]);

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Population:</strong> {planet.population}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
      <ResidentList residents={residents} />
    </div>
  );
};

export default PlanetCard;
