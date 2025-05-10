//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/lib/user/addUser.js
const db = require('../../db/db.config')

const addUser = async (user) => {
    const { name, email, hashpassword, role } = user;
  
    try {
      await db.query(
        'INSERT INTO user (accountname, email, password, userrole) VALUES (?, ?, ?, ?)',  // ✅ fixed column name
        [name, email, hashpassword, role]
      );
  
      const userIdresponse = await db.query('SELECT id FROM user WHERE email = ?', [email]);
      const userId = userIdresponse[0][0].id;
  
      return userId;
    } catch (error) {
      if (error.code === 1000) {
        const err = new Error('Email already exists');
        err.status = 409;
        throw err;
      }
      throw new Error(error);
    }
  };
  
module.exports=addUser