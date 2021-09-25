const express = require('express');
const router = express.Router();
const hijoController = require('../controllers/hijoController');

router.post('/add_hijo', hijoController.save);
router.get('/delete_hijo/:id',hijoController.delete);
router.get('/update_hijo/:id',hijoController.edit);
router.post('/update_hijo/:id',hijoController.update);

module.exports = router;