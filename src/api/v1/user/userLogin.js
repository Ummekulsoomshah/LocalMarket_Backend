// //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/user/userLogin.js

const checkUserPass = require('../../../lib/user/checkUserPass');
const jwt = require('jsonwebtoken');

async function userLogin(req, res) {
    try {
        const email = req.body.email || req.body.aemail;
        const password = req.body.password || req.body.apassword;
        
  
      const user = await checkUserPass(email, password);
  
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  }
  

module.exports = userLogin;


// const checkUserPass = require('../../../lib/user/checkUserPass');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const User = require('../models/User');  // Example, replace with your actual model import

// const userLogin = async (req, res) => {
//   try {
//     const { aemail, apassword, role } = req.body;

//     // Depending on the role, fetch the relevant user data (admin or user)
//     let user;
//     if (role === 'admin') {
//       user = await Admin.findOne({ email: aemail });  // Assuming Admin is the model for admins
//     } else {
//       user = await User.findOne({ email: aemail });  // Replace with your User model for general users
//     }

//     if (!user) {
//       return res.status(400).json({ message: 'User not found' });
//     }

//     // Compare the password from the request with the stored hash
//     const isMatch = await bcrypt.compare(apassword, user.password);  // Ensure `user.password` is the hashed password

//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid password' });
//     }

//     // Generate and send token or further actions
//     const token = generateToken(user);  // Implement your token generation logic
//     return res.status(200).json({ token });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: 'Server error' });
//   }
// };

// module.exports = userLogin;


// // const bcrypt = require('bcrypt')
// // const jwt = require('jsonwebtoken')
// // const checkUserPass = require('../../../lib/user/checkUserPass')
// // const userLogin = async function (req, res, next) {
// //     const { password, email,role } = req.body
// //     const userInfo = {
// //         password, email, role
// //     }
// //     try {
// //         const response = await checkUserPass(userInfo)
// //         res.send(response)
// //     } catch (error) {
// //         next(error)
// //     }
// // }
// // module.exports = userLogin
