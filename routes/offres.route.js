const express = require('express');
const { AddOffre, FindAllOffres, FindSinglOffre, UpdateOffre, DeleteOffre } = require('../controllers/Offre.controller');
const router = express.Router()
const Offre = require('../models/offres.model');

/* add user */
router.post('/Offres', AddOffre)

/* find all users */
router.get('/Offres', FindAllOffres)

/* find single user */
router.get('/Offres/:id', FindSinglOffre)

/* add user */
router.put('/Offres/:id', UpdateOffre)

/* add user */
router.delete('/Offres/:id', DeleteOffre)
router.post('/Offres/:id/candidatures', async (req, res) => {
    const id = req.params.id;
    const { name, diploma } = req.body;
  
    try {
      const offer = await Offre.findById(id);
      if (!offer) {
        return res.status(404).json({ message: 'Offer not found' });
      }
  
      const candidature = { name, diploma };
      offer.candidatures.push(candidature);
  
      await offer.save();
      res.status(200).json({ message: 'Candidature submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
module.exports = router;