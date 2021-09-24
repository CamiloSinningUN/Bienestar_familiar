const express = require('express');
const router = express.Router();
const hijoController = require('../controllers/hijoController');

router.get('/',hijoController.list);
router.post('/add', hijoController.save);
router.get('/delete/:id',hijoController.delete);

module.exports = router;