// //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/routes/admin.route.js



const router = require('express').Router();
const authMiddleware = require('../middlewares/authmiddleware');
const userLogin = require('../api/v1/user/userLogin');
const dashboardAnalytics = require('../api/v1/admin/dashboardAnalytics');

const adminController = require('../api/v1/admin/adminController');

// Admin login route
router.post('/login', userLogin); // Admin login doesn't need authentication middleware

// Other admin routes
router.get('/dashboardAnalytics', dashboardAnalytics);
router.post('/category',adminController.categoryAdd)

module.exports = router;



// const router=require('express').Router()
// const userLogin=require('../api/v1/user/userLogin')
// const dashboardAnalytics=require('../api/v1/admin/dashboardAnalytics')
// const authMiddleware=require('../middlewares/authmiddleware')

// router.post('/login', userLogin); // ✅ remove authMiddleware here


// // router.post('/login',authMiddleware,userLogin)
// router.get('/dashboardAnalytics',dashboardAnalytics)



// module.exports=router
