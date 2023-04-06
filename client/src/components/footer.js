import React from 'react';
import '../footer.css';



function Footerpage() {
  return (
   <div >
    
     <div className='foot'>
        
        
    <div className="row align-items-start">
        <div className="col-md-2">
            <h4>Accueil</h4>
            <ul>
              <li><a href="#">Page d'accueil</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">À propos</a></li>
            </ul>
    </div>
            </div>
          <div>
          <div className="col-md-6">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">Nous contacter</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          </div>
          <div>
          <div className="col-md-6">
            <h4>Nos partenaires</h4>
            <ul className="partners">
              <li><a href="#"><img src="img/partner1.png" alt="Partner 1"/></a></li>
              <li><a href="#"><img src="img/partner2.png" alt="Partner 2"/></a></li>
              <li><a href="#"><img src="img/partner3.png" alt="Partner 3"/></a></li>
              <li><a href="#"><img src="img/partner4.png" alt="Partner 4"/></a></li>
              <li><a href="#"><img src="img/partner5.png" alt="Partner 5"/></a></li>
              <li><a href="#"><img src="img/partner6.png" alt="Partner 6"/></a></li>
            </ul>
          </div>
          </div>
        </div>

         <p className='p1'>© 2006-2023 Powered by Tanitjobs.com</p>
         
    </div>
   
  );
}

export default Footerpage;