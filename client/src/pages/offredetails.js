import React, { useState, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import "../offresdetails.css";


const OffreDetails = () => {
    const { id } = useParams();
    const [offre, setOffre] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
      axios.get(`/api/offres/${id}`)
        .then(response => {
          setOffre(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, [id]);

    const handleDelete = () => {
        axios
          .delete(`/api/offres/${id}`)
          .then(() => {
            window.location.href = '/offre';

          })
          .catch(error => {
            console.log(error);
          });
        }
        const handleUpdate = () => {
            window.location.href = `/offres/${id}/edit`;
          };
          const handlePostuler = () => {
            navigate(`/offres/${id}/postuler`);
          };
  return (
    <div className="offre-details">
      <h2>{offre.name}</h2>
      <p>{offre.Description}</p>
      <div className="offre-info">
        <p>Date: {offre.date}</p>
        <p>Education level: {offre.niveau_etude}</p>
        <p>Salary: {offre.salaire}</p>
        <p>Languages: {offre.langues}</p>
        <p>Location: {offre.lieu}</p>
        <p>Keywords: {offre.mot_cles}</p>
        <p>Expiration date: {offre.date_dexpiration}</p>
      </div>
      <button className="btn btn-primary" onClick={handleUpdate}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn btn-success" onClick={handlePostuler}>
      Postuler
    </button>
          
    </div>
  );
};

export default OffreDetails;