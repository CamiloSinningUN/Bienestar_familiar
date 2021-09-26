const express = require('express');
const router = express.Router();
const indiceController = require('../controllers/consulta2Controller');

router.get('/',indiceController.list);
router.get('/consult',indiceController.cons2);



module.exports = router;