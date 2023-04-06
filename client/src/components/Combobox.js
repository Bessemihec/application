import React from 'react';
import { useState } from 'react';
import "../Login.css"


const ComboBox = () => {
    const [selectedValue, setSelectedValue] = useState('');
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    }
  
    return (
      <div>
        <label htmlFor="my-combobox">Select an option:</label>
        <select id="my-combobox" value={selectedValue} onChange={handleChange}>
          <option value="">--Select--</option>
          
          <option value="Employeur">Employeur</option>
          <option value="Candidat">Candidat</option>
        </select>
        <p>You have selected: {selectedValue}</p>
      </div>
    );
  }
  export default ComboBox