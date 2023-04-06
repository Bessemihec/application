import React, { useState } from 'react';
import axios from 'axios';
import {  useParams } from 'react-router-dom';

import "../candidature.css";

const CandidatureForm = () => {
  const getUserId = () => {
    const userId = sessionStorage.getItem('userId');
    console.log('userId:', userId); // log the value of userId
    return userId;
  }
console.log(sessionStorage);

  console.log(getUserId());
  const [diploma, setDiploma] = useState('');
  const { id } = useParams();
  const [form, setForm] = useState({});
  const onChangeHandler = (e) => {
  setForm({
      
    ...form,
    [e.target.name]: e.target.value,
    
});
setDiploma(e.target.files[0]);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`/api/offres/${id}/candidatures`, form)
      .then((response) => {
        const candidature = response.data;
        const userId = getUserId();
        axios.put(`/api/users/${userId}/apply`, { offerId: candidature.offer })
          .then((response) => {
            const appliedOffers = response.data;
            sessionStorage.setItem('appliedOffers', JSON.stringify(appliedOffers));
            setForm({});
            alert('Diploma submitted successfully');
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="candidature-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
           
            onChange={onChangeHandler}
            require
          />
        </div>
        <div className="form-group">
          <label htmlFor="diploma">Diploma:</label>
          <input
            type="file"
            className="form-control"
            id="diploma"
           name="diploma"
            onChange={onChangeHandler}
            require
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CandidatureForm;