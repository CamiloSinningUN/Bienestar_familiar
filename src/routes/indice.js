const express = require('express');
const router = express.Router();
const indiceController = require('../controllers/indiceController');

router.get('/',indiceController.list);
router.get('/hijos',indiceController.crud_hijos);
router.get('/padres',indiceController.crud_padres);
router.get('/consulta2',indiceController.cons2);
router.get('/consulta3',indiceController.cons3);
module.exports = router;