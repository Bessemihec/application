import React, { useState } from 'react';
import Slider from 'react-slick';
import Sidebar from '../components/Sidebar';
import '../MyForm.css'; // import CSS file
import axios from "axios";
function Education() {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const onChangeHandler = (e) => {
        
        
    setForm({
        
        ...form,
        [e.target.name]: e.target.value,
        
    });
    
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/education', form)
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
    <label>
      Quel est votre niveau d'étude actuel?    
      </label> 
      <input  name="niveau_etude" className="form-item" type="text" onChange={onChangeHandler} required/>
     
      <label>
      Diplôme ou spécialité
      </label>
       <input  name ="diplome" className="form-item" type="text" onChange={onChangeHandler} required />
     
      <label>
      Université ou établissement
      </label>
       <input name="universite" className="form-item" type="text" onChange={onChangeHandler} required />
      
     
      
      <button type="submit">Sauvegarder</button>
    </form>
   </div>
   
    </div>
    </div>
  );
}

export default Education;