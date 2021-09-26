const express = require('express');
const router = express.Router();
const padreController = require('../controllers/padreController');

router.post('/add_padre', padreController.save);
router.get('/delete_padre/:id',padreController.delete);
router.post('/update_padre/:id',padreController.update);

module.exports = router;