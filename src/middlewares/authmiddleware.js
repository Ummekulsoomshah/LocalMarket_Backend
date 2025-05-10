// //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/middlewares/authmiddleware.js
// const jwt=require('jsonwebtoken')
// function verifytoken(req,res,next){
//     let token= req.headers["authorization"]?.split(" ")[1]
//     console.log('my token',token)
//     if(token){
//         const user=jwt.verify(token,'secretkey')
//         req.user=user
//         req.token=token
//         next()
//     }else{
//         res.status(401).send('Unauthorized')

//     }
// }
// module.exports=verifytoken
const jwt = require('jsonwebtoken');

function verifytoken(req, res, next) {
    let token = req.headers["authorization"]?.split(" ")[1];
    console.log('Token Received:', token);

    if (token) {
        try {
            const user = jwt.verify(token, process.env.JWT_SECRET || 'secretkey');
            req.user = user;
            req.token = token;
            next();
        } catch (err) {
            res.status(403).json({ message: 'Invalid or expired token' });
        }
    } else {
        res.status(401).send('Unauthorized');
    }
}

module.exports = verifytoken;
