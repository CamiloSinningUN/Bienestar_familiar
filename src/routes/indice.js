const express = require('express');
const router = express.Router();
const indiceController = require('../controllers/indiceController');

router.get('/',indiceController.list);
router.get('/hijos',indiceController.crud_hijos);
router.get('/padres',indiceController.crud_padres);
router.get('/hijos_edit',indiceController.hijos_edit);
router.get('/padres_edit',indiceController.padres_edit);


module.exports = router;