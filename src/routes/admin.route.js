const router=require('express').Router()
const userLogin=require('../api/v1/user/userLogin')
const dashboardAnalytics=require('../api/v1/admin/dashboardAnalytics')
const authMiddleware=require('../middlewares/authmiddleware')


router.post('/login',authMiddleware,userLogin)
router.get('/dashboardAnalytics',dashboardAnalytics)
// router.post('/catagory',adminController.catagoryAdd)


module.exports=router