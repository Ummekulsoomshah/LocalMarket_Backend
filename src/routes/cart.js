const router = require('express').Router()
const authMiddleware = require('../middlewares/authmiddleware')
const addTocart=require('../api/v1/cart/addTocart')
const getCart=require('../api/v1/cart/getCart')

router.post('/addToCart/:prodId',authMiddleware,addTocart)
router.get('/getCart',authMiddleware,getCart)


module.exports = router