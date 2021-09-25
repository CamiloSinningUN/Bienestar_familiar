const express = require('express');
const router = express.Router();
const padreController = require('../controllers/padreController');

router.get('/',padreController.list);
router.post('/add_padre', padreController.save);
router.get('/delete_padre/:id',padreController.delete);

module.exports = router;