// //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/routes/products.js
const router = require('express').Router();
const addProduct = require('../api/v1/products/addProduct');
const getCategoryWiseProducts = require('../api/v1/products/getCategoryWiseProducts');
const getProductDetails = require('../api/v1/products/getProductsDetails');
const authmiddleware = require('../middlewares/authmiddleware');

router.get('/getProductDetails/:insertid', getProductDetails);
router.get('/getCategoryProducts/:categId', getCategoryWiseProducts);
router.post('/addProduct', authmiddleware, addProduct);

module.exports = router;
