//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/routes/user.route.js
const router = require('express').Router();
const userSignup = require('../api/v1/user/userSignup');
const userLogin = require('../api/v1/user/userLogin');
const authMiddleware = require('../middlewares/authmiddleware');

// ✅ No middleware for login/signup
router.post('/signup', userSignup);
router.post('/login', userLogin);

// ✅ Use middleware for protected routes only
// router.get('/profile', authMiddleware, userProfile);

module.exports = router;




// const router=require('express').Router()
// const authMiddleware=require('../middlewares/authmiddleware')
// const userSignup=require('../api/v1/user/userSignup')
// const userLogin=require('../api/v1/user/userLogin')



// // router.post('/signup',authMiddleware,userSignup)
// router.post('/login',authMiddleware,userLogin)

// router.post('/signup', userSignup)   // ✅
// // router.post('/login', userLogin)     // ✅


// module.exports=router