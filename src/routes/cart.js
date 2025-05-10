//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/routes/cart.js
const router = require('express').Router()
const authMiddleware = require('../middlewares/authmiddleware')
const addTocart=require('../api/v1/cart/addTocart')
const getCart=require('../api/v1/cart/getCart')
// const checkoutSession=require('../api/v1/cart/checkoutSession')

router.post('/addToCart/:prodId',authMiddleware,addTocart)
router.get('/getCart',authMiddleware,getCart)
// router.post('/create-checkout-session',authMiddleware,checkoutSession)


module.exports = router