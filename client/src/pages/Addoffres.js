import React, { useState } from "react";
import axios from "axios";
import "../addoffres.css";
import Alert from "../components/Alert";

const AddOffre = () => {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
   
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/offres', form)
    .then((res) => {
        setMessage(res.data.message);
        setForm({});
        setErrors({}); // clear any previous errors
       
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 4000);
      })
        
    .catch(err => setErrors(err.response.data))
};


  

  return (
    <div className="container mt-5">
        <Alert message={message} show={show}/>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Add Offre</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="type">Type</label>
                  <input
                    type="text"
                    name="type"
                    id="type"
                    className={`form-control ${
                      errors.type ? "is-invalid" : ""
                    }`}
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
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
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
                    className={`form-control ${
                      errors.Description ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Description"
                    value={form.Description}
                    onChange={handleChange}
                  ></textarea>
                  {errors.Description && (
                    <div className="invalid-feedback">
                      {errors.Description}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="text"
                    name="date"
                    id="date"
                    className={`form-control ${
                      errors.date ? "is-invalid" : ""
                    }`}
                    placeholder="Enter date"
                    value={form.date}
                    onChange={handleChange}
                  />
                  {errors.date && (
                    <div className="invalid-feedback">{errors.date}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="niveau_etude">Niveau d'étude</label>
                  <input
                    type="text"
                    name="niveau_etude"
                    id="niveau_etude"
                    className={`form-control ${
                      errors.niveau_etude ? "is-invalid" : ""
                    }`}
                    placeholder="Enter niveau d'étude"
                    value={form.niveau_etude}
                    onChange={handleChange}
                  />
                  {errors.niveau_etude && (
                    <div className="invalid-feedback">
                      {errors.niveau_etude}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="salaire">Salaire</label>
                  <input
                    type="text"
                    name="salaire"
                    id="salaire"
                    className={`form-control ${
                      errors.salaire ? "is-invalid" : ""
                    }`}
                    placeholder="Enter salaire"
                    value={form.salaire}
                    onChange={handleChange}
                  />
                  {errors.salaire && (
                    <div className="invalid-feedback">{errors.salaire}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="langues">Langues</label>
                  <input
                    type="text"
                    name="langues"
                    id="langues"
                    className={`form-control ${
                      errors.langues ? "is-invalid" : ""
                    }`}
                    placeholder="Enter langues"
                    value={form.langues}
                    onChange={handleChange}
                  />
                  {errors.langues && (
                    <div className="invalid-feedback">{errors.langues}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="lieu">Lieu</label>
                  <input
                    type="text"
                    name="lieu"
                    id="lieu"
                    className={`form-control ${
                      errors.lieu ? "is-invalid" : ""
                    }`}
                    placeholder="Enter lieu"
                    value={form.lieu}
                    onChange={handleChange}
                  />
                  {errors.lieu && (
                    <div className="invalid-feedback">{errors.lieu}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="mot_cles">Mots clés</label>
                  <input
                    type="text"
                    name="mot_cles"
                    id="mot_cles"
                    className={`form-control ${
                      errors.mot_cles ? "is-invalid" : ""
                    }`}
                    placeholder="Enter mots clés"
                    value={form.mot_cles}
                    onChange={handleChange}
                  />
                  {errors.mot_cles && (
                    <div className="invalid-feedback">{errors.mot_cles}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="date_dexpiration">Date d'expiration</label>
                  <input
                    type="text"
                    name="date_dexpiration"
                    id="date_dexpiration"
                    className={`form-control ${
                      errors.date_dexpiration ? "is-invalid" : ""
                    }`}
                    placeholder="Enter date d'expiration"
                    value={form.date_dexpiration}
                    onChange={handleChange}
                  />
                  {errors.date_dexpiration && (
                    <div className="invalid-feedback">
                      {errors.date_dexpiration}
                    </div>
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
export default AddOffre;