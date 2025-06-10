const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CRUD untuk semua produk
router.get('/', productController.getAllProducts);  // /api/products
router.get('/:id', productController.getProductById);  // /api/products/:id
router.post('/', productController.createProduct);  // /api/products
// router.put('/', productController.updateProduct);  // /api/products
router.put('/:id', productController.updateProduct);  // /api/products/:id
router.delete('/:id', productController.deleteProduct);  // /api/products/:id

// CRUD untuk produk populer
router.get('/popular/all', productController.getPopularProducts);  // /api/products/popular/all
router.post('/popular', productController.createPopularProduct);  // /api/products/popular
router.put('/popular', productController.updatePopularProduct);  // /api/products/popular

module.exports = router;
