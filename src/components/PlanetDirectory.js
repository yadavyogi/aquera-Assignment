import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetCard from "./PlanetCard" ;
import Pagination from './Pagination';

const PlanetDirectory = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState('https://swapi.dev/api/planets/?format=json');
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [prevPageUrl, setPrevPageUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(currentPageUrl);
      setPlanets(response.data.results);
      setNextPageUrl(response.data.next);
      setPrevPageUrl(response.data.previous);
    };
    fetchData();
  }, [currentPageUrl]);

  return (
    <div>
      <div className="planet-container">
        {planets.map((planet, index) => (
          <PlanetCard key={index} planet={planet} />
        ))}
      </div>
      <Pagination
        prevPageUrl={prevPageUrl}
        nextPageUrl={nextPageUrl}
        setCurrentPageUrl={setCurrentPageUrl}
      />
    </div>
  );
};

export default PlanetDirectory;
