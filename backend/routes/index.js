const express = require('express');
const ProductController = require('../controllers/product');
const router = express.Router();

router.get('/', ProductController.fetchAllProducts);
router.get('/product/:productId', ProductController.fetchSingleProduct);
router.put('/product/:productId', ProductController.UpdateProductViewed);
router.get('/mostviewed/product', ProductController.fetchMostViewProductsList);

module.exports = router;