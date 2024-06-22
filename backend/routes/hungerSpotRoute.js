// // hungerSpotFormRoutes.js
// const express = require('express');
// const router = express.Router();
// const HungerSpotForm = require('../models/HungerSpotFormModel');

// router.post('/', async (req, res) => {
//   try {
//     const hungerSpotFormData = req.body; // Assuming form data is sent in the request body
//     const hungerSpotForm = new HungerSpotForm(hungerSpotFormData);
//     await hungerSpotForm.save();
//     res.status(201).send('Data saved successfully');
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();

// load hunger spot model
const HungerSpot = require('../models/hungerSpotModel');

router.get('/test', (req, res) => res.json({ msg: "Hunger Spot data Saved" }));

// post route to save hunger spot data
router.post('/', async(req, res) => {
    const { name, address, contact } = req.body;
    const newHungerSpot = new HungerSpot({
        name,
        address,
        contact
    });

    try{
        const savedHungerSpot = await newHungerSpot.save();
        res.status(201).json(savedHungerSpot);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;