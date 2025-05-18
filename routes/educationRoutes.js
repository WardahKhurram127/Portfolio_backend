const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationController');

// GET all education records
router.get('/', educationController.getAllEducation);

// GET a single education record by ID
router.get('/:id', educationController.getEducationById);

// POST a new education record
router.post('/', educationController.createEducation);

// PUT (update) an education record by ID
router.put('/:id', educationController.updateEducation);

// DELETE an education record by ID
router.delete('/:id', educationController.deleteEducation);

module.exports = router;
