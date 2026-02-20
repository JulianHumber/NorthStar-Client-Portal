const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/', clientController.getHome);

router.get('/clients', clientController.getClients);
router.get('/clients/:id', clientController.getClientDetails);

router.get('/clients/add', clientController.getAddClient);
router.post('/clients/add', clientController.postAddClient);

router.get('/clients/edit/:id', clientController.getEditClient);
router.post('/clients/edit/:id', clientController.postEditClient);

router.get('/clients/delete/:id', clientController.getDeleteClient);
router.post('/clients/delete/:id', clientController.postDeleteClient);

module.exports = router;