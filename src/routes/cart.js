const router = require('express').Router()
const authMiddleware = require('../middlewares/authmiddleware')
const addTocart=require('../api/v1/cart/addTocart')
const getCart=require('../api/v1/cart/getCart')
const checkout=require('../api/v1/cart/checkout')
const {createPaymentLink}=require('../api/v1/cart/payfast')
const {processPaymentNotification}=require('../api/v1/cart/payfast')

router.post('/addToCart/:prodId',authMiddleware,addTocart)
router.get('/getCart',authMiddleware,getCart)
router.post('/checkout',authMiddleware,checkoutRoute)
router.post('/payment', createPaymentLink); // Create payment link
router.post('/payment/notify', processPaymentNotification); 


module.exports = router