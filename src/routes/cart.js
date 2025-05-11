const router = require('express').Router()
const authMiddleware = require('../middlewares/authmiddleware')
const addTocart=require('../api/v1/cart/addTocart')
const getCart=require('../api/v1/cart/getCart')
const checkout=require('../api/v1/cart/checkout')
const createPaymentLink=require('../api/v1/cart/payfast')
const completeOrder=require('../api/v1/cart/completeOrder')

router.post('/addToCart/:prodId',authMiddleware,addTocart)
router.get('/getCart',authMiddleware,getCart)
router.post('/checkout',authMiddleware,checkout)
router.post('/payment', authMiddleware,createPaymentLink); // Create payment link
router.post('/completeOrder',authMiddleware, completeOrder); 


module.exports = router