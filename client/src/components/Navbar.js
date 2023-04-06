import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePage.css';

function Navbar() {
  return (
    
        <nav className="navbar">
          <Link to="/">
        <img src={require("../sources/poste.svg.png")} height={100} alt="banner-image" className="navbar-logo" />
      </Link>
            <ul>
              <li><a href="/offre">Offre</a></li>
              <li><a href="/offre?type=Formation">Formation</a></li>
              
              <li><a href="/offre?type=Stage">Stage</a></li>
              <li class="dropdown">
      <a href="#" class="dropbtn">Emploi par métier</a>
      <div class="dropdown-content">
        <a href="/offre?keyword=Developpement">Emploi  developpement</a>
        <a href="#">Emploi  marketing</a>
        <a href="#">Emploi ingenieur</a>
        </div>
        </li>
        <li class="dropdown">
        <a href="#" class="dropbtn">Emploi par Ville</a>
      <div class="dropdown-content">
        <a href="/offre?location=mourouj">Emploi mourouj</a>
        <a href="/offre?location=lac">Entreprise lac</a>
        <a href="/offre?location=Tunis">Entreprise Tunis</a>
      </div>
    </li>
   
              </ul>
            
             
            <Link to="/register"><button class="inscription-button">Inscription</button></Link>
              <Link to="/login"><button class="login-button" >Log in</button></Link>
            
           
              </nav>
              
  );
}

export default Navbar;