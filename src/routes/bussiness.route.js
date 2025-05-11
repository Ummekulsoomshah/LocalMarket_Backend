const router=require('express').Router()
const userSignup=require('../api/v1/user/userSignup')
const userLogin=require('../api/v1/user/userLogin')
const SellerdashboardAnalytics=require('../api/v1/bussiness/SellerdashboardAnalytics')
const authmiddleware=require('../middlewares/authmiddleware')

router.post('/signup',userSignup)
router.post('/login',userLogin)
router.get('/SellerdashboardAnalytics',authmiddleware,SellerdashboardAnalytics)

module.exports=router