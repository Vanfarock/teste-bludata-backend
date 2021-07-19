const express = require('express');

const router = express.Router();

const providerController = require('../Controllers/providerController');

router.get('/', providerController.getProviders);
router.get('/:id', providerController.getProvider);
router.post('/create', providerController.createProvider);
router.put('/update', providerController.updateProvider);

module.exports = router;
