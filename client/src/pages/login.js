import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import "../Login.css"
import ComboBox from '../components/Combobox';
import { Link } from 'react-router-dom';





const LoginForm = () => {
  const navigate = useNavigate();

  const [Email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
   
    if (!Email.includes('@') || !Email.includes('.')) {
      setMessage('Please enter a valid email address.');
      return;
     }
      if (!Email || !password) {
        setMessage('Please enter your email and password.');
      return;
      }
    
    console.log('Email:', Email);
    console.log('Password:', password);
    axios.post("/api/login", { Email, password })
    .then((response) => {
      
      const { token, Role ,userId} = response.data;
      localStorage.setItem("token", token);
      setMessage(response.data.message);
      if(Role=="employee"){
       
        
          
        navigate(`/changepassword/${userId}`);
       
       
      }
      if (Role === "candidat") {
        window.location.href = "/";

      } else if (Role === "admin") {
        window.location.href = "/user";

      }
    })
    .catch((error) => {
      setError(error.response.data.message);
      setMessage("La combinaison d'adresse e-mail et de mot de passe que vous avez saisie n'est pas reconnue ou n'existe pas. Veuillez réessayer.")
    });
};

  return (
    <div id="loginform">
      <FormHeader title="Login" />
     
      <form onSubmit={handleSubmit}>
        <FormInput
        
          description="Email"
          placeholder="Enter your Email"
          type="Email"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <FormInput
          description="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <ComboBox/>
       <button className="row" type="submit">Login</button>
       {message && <div> {message}</div>}
      </form>
    </div>
  );
};

const FormHeader = ({ title }) => <h2 id="headerTitle">{title}</h2>;

const Form = () => (
  <div>
    <FormInput description="Email"  placeholder="Enter your email" type="text"  />
    <FormInput description="Password"  placeholder="Enter your password"  type="password"  />
 
   
  </div>
);




const FormInput = ({ description, placeholder, type, value, onChange,style }) => (
  <div class="row">
    <label>{description}</label>
    <input type={type} placeholder={placeholder} value={value}  onChange={onChange} />
  </div>
);




const Login = () => {
  return <LoginForm />;
};

export default Login;