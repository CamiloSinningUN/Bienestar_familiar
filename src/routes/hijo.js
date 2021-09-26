const express = require('express');
const router = express.Router();
const hijoController = require('../controllers/hijoController');

router.get('/',hijoController.list);
router.post('/add_hijo', hijoController.save);
router.get('/delete_hijo/:id',hijoController.delete);

module.exports = router;