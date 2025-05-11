// //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/middlewares/authmiddleware.js
const jwt = require('jsonwebtoken');

function verifytoken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader?.split(" ")[1];

    console.log('Authorization Header:', authHeader);
    console.log('Token Received:', token);

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - No token provided' });
    }

    try {
        const decoded = jwt.verify(token, 'mySuperSecretKey123');
        req.user = decoded; // Attach decoded user info to request
        next();
        console.log("Decoded User in Middleware:", decoded);
    } catch (err) {
        console.error("JWT verification error:", err.message);
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
}

module.exports = verifytoken;
