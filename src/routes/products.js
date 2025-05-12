const router=require('express').Router()
const addProduct = require('../api/v1/products/addProduct')
const getCategoryWiseProducts = require('../api/v1/products/getCategoryWiseProducts')
const getProductDetails = require('../api/v1/products/getProductsDetails')
const authmiddleware=require('../middlewares/authmiddleware')
// const getAllproducts=require('../api/v1/products/getAllproducts')


router.post('/adproducts',authmiddleware,addProduct)
router.get('/getProductDetails/:insertid',getProductDetails)
router.get('/getCategoryProducts/:categId',getCategoryWiseProducts)
// router.gwt('/getAllproducts',getAllproducts)

module.exports=router