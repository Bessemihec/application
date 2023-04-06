import React, { useState } from 'react';
import Slider from 'react-slick';
import Sidebar from '../components/Sidebar';
import '../MyForm.css'; // import CSS file
import axios from "axios";

function MyForm() {
  
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
   axios.post('/api/interet', form)
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
    <label htmlFor="experience_professionnelle">
      Experience Professionnelle
      </label>
        <input name="experience_professionnelle" className="form-item" type="text"  onChange={onChangeHandler} required />
      
      <label>
      Type d'emploi désiré   
      </label>    
       <input   name ="emploi_desire" className="form-item" type="text" onChange={onChangeHandler} required />
      
      <label>
      Titre du poste désiré    
      </label>   
       <input  name ="titre_emploi_desire"className="form-item" type="text" onChange={onChangeHandler} required />
      
      <label>
        Salaire
        </label>
        <input name="salaire" className="form-item" type="text"  onChange={onChangeHandler} required />
     
      <label>
        Status:
        </label>
        <input name ="status" className="form-item" type="text"  onChange={onChangeHandler} required />
      
      
      <button type="submit">Sauvegarder</button>
    </form>
   </div>
   
    </div>
    </div>
  );
}

export default MyForm;