import React, { useState } from 'react';
import '../Register.css';
import ComboBox from '../components/Combobox';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
 
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const[message,setMessage]=useState("");

  const onChangeHandler = (e) => {
        
        
    setForm({
        
        ...form,
        [e.target.name]: e.target.value,
   
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      // Check if the email already exists
      const Email = await axios.get(`/api/register?Email=${form.Email}`);
      if (Email.data.exists) {
        setMessage('Email already exists');
        return;
      }
    
    const response = await axios.post('/api/register', form);
    
   
    
      console.log(response.data);
      setForm({});
      setMessage('');
      if (form.Role === 'employee') {
        window.location.href = '/offre';
      } else if (form.Role === 'candidat') {
        window.location.href = '/formulaire';
    }
  }
    catch (error) {
      console.error(error.response.data);
      setErrors(error.response.data);
      setMessage("user exist");
    }
  };

  return (
    <div className="register-container">
      <div className='register'>
      
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
     
      <label htmlFor="Email">Email</label>
                        <input
                            type="email"
                            name="Email"
                            placeholder="Enter email"
                            onChange={onChangeHandler}
                            errors={errors.Email}
                            required
                        />
                      

                    
                    
                        <label htmlFor="Firstname">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="Firstname"
                            placeholder="Enter name"
                            onChange={onChangeHandler}
                            errors={errors.Firstname}
                            required
                        />

                      <label htmlFor="Lastname">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="Lastname"
                            placeholder="Enter last name"
                            onChange={onChangeHandler}
                            errors={errors.Lastname}
                            required
                        />
                    
                    
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            onChange={onChangeHandler}
                            
                            required
                        />
                     
                  
                       
              

                        <label htmlFor="Age">Age</label>
                        <input
                            type="text"

                            name="Age"
                            placeholder="Enter age"

                            
                            onChange={onChangeHandler}
                            errors={errors.Age}
                            required
                        />
                       
                 

                   
                        <label htmlFor="Phone">Phone Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            name="Phone"
                            placeholder="Enter phone number"
                            onChange={onChangeHandler}
                            errors={errors.Phone}

                            required
                        />
                    
                        <label htmlFor="Adress">Adress</label>
                        <input
                            type="text"
                            className="form-control"
                            name="Adress"
                            placeholder="Enter Adress"
                            onChange={onChangeHandler}
                            errors={errors.Adress}

                            required
                        />
                    
                        
                       
                          <label htmlFor="Role">Role</label>
                        <input
                            type="Role"
                            name="Role"
                            placeholder="Enter Role"
                            onChange={onChangeHandler}
                            errors={errors.Email}
                            required
                        />
                            
       
        
      <button type="submit">Submit</button>
      {message && <div>{message}</div>}
      </form>
    </div>
    
    </div>
  );
  }

export default Register;