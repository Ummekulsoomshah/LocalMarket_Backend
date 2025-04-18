const router=require('express').Router()
const authMiddleware=require('../middlewares/authmiddleware')
const userSignup=require('../api/v1/user/userSignup')
const userLogin=require('../api/v1/user/userLogin')



router.post('/signup',authMiddleware,userSignup)
router.post('/login',authMiddleware,userLogin)



module.exports=router