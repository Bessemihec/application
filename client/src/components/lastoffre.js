import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../myoffres.css"
import { Link, useLocation } from "react-router-dom";

const Offres = () => {
  const [offres, setOffres] = useState([]);
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const keyword = searchParams.get('keyword');
  const location = searchParams.get('location');
  const type = searchParams.get('type');

  useEffect(() => {
    axios.get('/api/offres')
      .then(res => {
        let filteredOffres = res.data;
        if (keyword) {
          filteredOffres = filteredOffres.filter(offre =>
            offre.mot_cles.includes(keyword)
          );
        }
        if (type) {
          filteredOffres = filteredOffres.filter(offre =>
            offre.type.includes(type)
          );
        }
        if (location) {
          filteredOffres = filteredOffres.filter(offre =>
            offre.lieu.includes(location)
          );
        }
        setOffres(filteredOffres);
      })
      .catch(err => console.log(err));
  }, [keyword, location]);

  const lastThreeOffres = offres.slice(Math.max(offres.length - 3, 0));

  return (
    <div className="offres-list">
      <h1>Job Offers</h1>
      <ul>
        {lastThreeOffres.map(offre => (
          <li key={offre._id}>
            <h2>{offre.name}</h2>
            <p className='description'>{offre.Description}</p>
            <div className="offre-details">
              <p>Type: {offre.type}</p>
              <p>Lieu: {offre.lieu}</p>
              <p>Keywords: {offre.mot_cles}</p>
            </div>
            <Link to={`/offres/${offre._id}`} className="btn">
              Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Offres;