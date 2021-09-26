const express = require('express');
const router = express.Router();
const indiceController = require('../controllers/indiceController');

router.get('/',indiceController.list);
router.get('/hijos',indiceController.crud_hijos);
router.get('/padres',indiceController.crud_padres);

module.exports = router;