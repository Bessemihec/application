import React from 'react';
import '../HomePage.css';
import Sliding from '../components/slider';
import Register from './Register';
import "slick-carousel/slick/slick.css";
import { Link } from 'react-router-dom';
import Pagefooter from '../components/footer';

import "../slider.css"
import SearchBar from '../components/searchbar';
import Footer from '../components/footer';
import "../footer.css"
import Footerpage from '../components/footer';
import Sidebar from '../components/Sidebar';
import Offres from '../components/lastoffre';



const HomePage = () => {
  return (
    <div className="homepage">
      
          <div className="banner">
            <h1>Welcome to My Website</h1>
          </div>
          
          
          <Sliding/>
          <div className="search-container">
          <SearchBar/>
          
          </div>
          <section id="contact">
                <h2>Contact Us</h2>
                <form>
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" required/>
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required/>
                  <label for="message">Message:</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                  <button type="submit">Send</button>
                  </form>
                </section>
                <div><Offres/></div>
                <div>Tanitjobs.com est  le premier site d'emploi en Tunisie, leader sur le marché de  recrutement en ligne, depuis sa création en 2006.
Proposant des offres d’emploi dans toutes les régions et à l’étranger, mis à jour quotidiennement. Notre site d'emploi vous offre plus de chances à décrocher le Travail qui correspond le mieux à votre profil.  Mettez à jours votre Cv en ligne, chercher un Travail, c'est aussi bien rédiger votre CV,  mettre en avant votre expérience et vos atouts.
Si vous êtes à la recherche d’un travail dans l’une des régions de la Tunisie ou ailleurs, Tanitjobs.com  vous propose, en permanence, des annonces d'emploi pour des postes vacants dans votre domaine d’activité. Les entreprises informatique en Tunisie ou Offshore , les centres d’appels  et les bureaux et cabinets de recrutement et d'intérim sont les  recruteurs les plus actifs  sur le site.
Tanitjobs dédie, par ailleurs, un espace pour les recruteurs qui cherchent des profils performants dans leurs secteurs d’activité. Vous trouverez aussi des annonces de formations en Tunisie.
Tanitjobs, le portail tunisien de l’emploi, accompagne les candidats comme les recruteurs pour un avenir meilleur !</div>

  
 
</div>
  );
};


export default HomePage;