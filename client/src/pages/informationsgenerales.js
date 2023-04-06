import React, { useState } from 'react';
import Slider from 'react-slick';
import Sidebar from '../components/Sidebar';
import '../MyForm.css'; // import CSS file
import axios from "axios";

function Information() {
 

  const [photo, setPhoto] = useState(null);
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const onChangeHandler = (e) => {
        
    setForm({
      
        ...form,
        [e.target.name]: e.target.value,
        
    });
    setPhoto(e.target.files[0]);

    
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/informationgenerales', form)
          .then((res) => {
            setForm({});
            setMessage(res.data.message);

           
           
          })
            
            .catch(err => setErrors(err.response.data))
    };
  

  

  
  
 
  return (
  
     <div className="form-page">
    <div className="form-container-with-slider">
      <Sidebar /> 
     
      <div className="form-container">
    <form onSubmit={handleSubmit} className="my-form">
    <label htmlFor="photo">
      Upload your photo:
       </label>
      <input type="file" id="photo" name="photo" onChange={onChangeHandler} required />
     
      {photo && (
              <img
                src={URL.createObjectURL(photo)}
                alt="Uploaded photo"
                className="uploaded-photo"
              />
            )}
      <label>
      Objectifs et Motivations (Lettre de Motivation)
      </label>
        <textarea   name="lettre_motivation" type="textarea"  onChange={onChangeHandler} required />
      
     
      
      <button type="submit">Sauvegarder</button>
    </form>
   </div>
   
    </div>
    </div>
  );
}

export default Information;