const express = require('express');
const router = express.Router();

// Load user model
const DonateData = require('../models/donateModel');

// Test route
router.get('/test', (req, res) => res.json({ msg: 'Donation Data saved' }));

// GET route to fetch all donations
router.get('/', async (req, res) => {
    try {
        const donations = await DonateData.find();
        res.json(donations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST route to save data
router.post('/', async (req, res) => {
    const { name, address, contact, foodDesc, quantity, foodTime } = req.body;
    const newDonation = new DonateData({
        name,
        address,
        contact,
        foodDesc,
        quantity,
        foodTime
    });

    try {
        const savedDonation = await newDonation.save();
        res.status(201).json(savedDonation);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
