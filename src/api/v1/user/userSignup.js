
//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/user/userSignup.js
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const addUser = require('../../../lib/user/addUser')


const userSignup = async function (req, res, next) {
    const { name, email, password,role } = req.body
    console.log('req.body',req.body)
    const hashpassword = await bcrypt.hash(password, 10)
    const user = { name, email, hashpassword, role }
    try {
        const id = await addUser(user)
        jwt.sign({ id: id, role: role }, process.env.JWT_SECRET, (err, token)  => {
            res.status(200).json({
                token,
                message: 'User registered successfully'
            })
        })
    } catch (err) {
        next(err)
    }
}
module.exports = userSignup