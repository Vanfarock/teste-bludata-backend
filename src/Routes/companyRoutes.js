const express = require('express');

const router = express.Router();

const companyController = require('../Controllers/companyController');

router.get('/', companyController.getCompanies);
router.get('/:id', companyController.getCompany);
router.post('/create', companyController.createCompany);
router.put('/update', companyController.updateCompany);

module.exports = router;
