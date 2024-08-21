const express = require('express');
const router = express.Router();
const ItemController = require('../controllers/itemController');

// Define routes
router.get('/', ItemController.getItems);
router.post('/', ItemController.createItem);
router.get('/:id', ItemController.getItemById);
router.put('/:id', ItemController.updateItem);
router.delete('/:id', ItemController.deleteItem);

module.exports = router;
