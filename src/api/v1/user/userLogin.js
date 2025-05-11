// // // //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/user/userLogin.js
const checkUserPass = require('../../../lib/user/checkUserPass');
const jwt = require('jsonwebtoken');

async function userLogin(req, res) {
    try {
        const email = req.body.email || req.body.aemail;
        const password = req.body.password || req.body.apassword;

        const user = await checkUserPass(email, password);

        // Define payload (remove sensitive data)
        const payload = {
            userId: user._id || user.id, // <- this is critical
            email: user.email,
            role: user.role,
        };

        // Generate token with hardcoded secret
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                userrole: user.userrole
              },
            'mySuperSecretKey123',
            { expiresIn: '1h' }
        );

        console.log("Token Created:", token); 
        console.log("User from DB:", user);
        
        res.status(200).json({ message: 'Login successful', token, role: user.role });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

module.exports = userLogin;
