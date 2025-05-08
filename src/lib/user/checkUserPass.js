//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/lib/user/checkUserPass.js
const db = require('../../db/db.config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const checkUserPass = async (user) => {
    const { password, email, role } = user
    console.log('userinfo', user)
    try {
        const [userdb] = await db.query('SELECT * from user where email=?', [email])
        console.log('userdb', userdb)
        if (!userdb || userdb.length === 0) {
            const error = new Error('user not found')
            error.status = 404
            throw error
        }
        const validPassword = await bcrypt.compare(password, userdb[0].accountpassword)
        if (validPassword) {
            const token = jwt.sign({ id: userdb[0].id, role: role }, 'secretkey')
            const result = {
                token,
                role,
                message: 'User logged in successfully'
            }
            return result
        } else {
            const error = new Error("invalid credentials")
            error.status = 401
            return error
        }
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = checkUserPass