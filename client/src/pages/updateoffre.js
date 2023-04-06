import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import "../updateoffre.css"

const EditOffre = () => {
  
  const { id } = useParams();

  const [form, setForm] = useState({});

  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get(`/api/offres/${id}`)
      .then(response => {
        setForm(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/offres/${id}`, form)
      .then(response => {
        window.location.href =`/offres/${id}`;
      })
      .catch(error => {
        
         
        
        console.log(error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Edit Offre</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="type">Type</label>
                  <input
                    type="text"
                    name="type"
                    id="type"
                    className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                    placeholder="Enter type"
                    value={form.type}
                    onChange={handleChange}
                  />
                  {errors.type && (
                    <div className="invalid-feedback">{errors.type}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Enter name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="Description">Description</label>
                  <textarea
                    name="Description"
                    id="Description"
                    className={`form-control ${errors.Description ? 'is-invalid' : ''}`}
                    placeholder="Enter Description"
                    value={form.Description}
                    onChange={handleChange}
                  ></textarea>
                  {errors.Description && (
                    <div className="invalid-feedback">{errors.Description}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="text"
                    name="date"
                    id="date"
                    
                    className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                    placeholder="Enter date"
                    value={form.date}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.date}</div>
                  )}
                  </div>
                    <div className="form-group">
                        <label htmlFor="niveau_etude">Education level</label>
                        <input
                            type="text"
                            name="niveau_etude"
                            id="niveau_etude"
                            className={`form-control ${errors.niveau_etude ? 'is-invalid' : ''}`}
                            placeholder="Enter education level"
                            value={form.niveau_etude}
                            onChange={handleChange}
                        />
                        {errors.niveau_etude && (
                            <div className="invalid-feedback">{errors.niveau_etude}</div>
                        )}
                        </div>
                        <div className="form-group">
                        <label htmlFor="salaire">Salary</label>
                        <input
                            type="text"
                            name="salaire"
                            id="salaire"
                            className={`form-control ${errors.salaire ? 'is-invalid' : ''}`}
                            placeholder="Enter salary"
                            value={form.salaire}
                            onChange={handleChange}
                        />
                        {errors.salaire && (
                            <div className="invalid-feedback">{errors.salaire}</div>
                        )}
                        </div>
                        <div className="form-group">
                        <label htmlFor="langues">Languages</label>
                        <input
                            type="text"
                            name="langues"
                            id="langues"
                            className={`form-control ${errors.langues ? 'is-invalid' : ''}`}
                            placeholder="Enter languages"
                            value={form.langues}
                            onChange={handleChange}
                        />
                        {errors.langues && (
                            <div className="invalid-feedback">{errors.langues}</div>
                        )}
                        </div>
                        <div className="form-group">
                        <label htmlFor="lieu">Location</label>
                        <input
                            type="text"
                            name="lieu"
                            id="lieu"
                            className={`form-control ${errors.lieu ? 'is-invalid' : ''}`}
                            placeholder="Enter location"
                            value={form.lieu}
                            onChange={handleChange}
                        />
                        {errors.lieu && (
                            <div className="invalid-feedback">{errors.lieu}</div>
                        )}
                        </div>
                        <div className="form-group">
                        <label htmlFor="mot_cles">Keywords</label>
                        <input
                            type="text"
                            name="mot_cles"
                            id="mot_cles"
                            className={`form-control ${errors.mot_cles ? 'is-invalid' : ''}`}
                            placeholder="Enter keywords"
                            value={form.mot_cles}
                            onChange={handleChange}
                        />
                        {errors.mot_cles && (
                            <div className="invalid-feedback">{errors.mot_cles}</div>
                        )}
                        </div>
                        <div className="form-group">
                        <label htmlFor="date_dexpiration">Expiration date</label>
                        <input
                            type="text"
                            name="date_dexpiration"
                            id="date_dexpiration"
                            className={`form-control ${errors.date_dexpiration ? 'is-invalid' : ''}`}
                            placeholder="Enter expiration date"
                            value={form.date_dexpiration}
                            onChange={handleChange}
                        />
                        {errors.date_dexpiration && (
                            <div className="invalid-feedback">{errors.date_dexpiration}</div>
                        )}
                        </div>
                        <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    </div>
</div>
                      );
};

export default EditOffre;