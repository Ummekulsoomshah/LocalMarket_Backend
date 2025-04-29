const db = require('../../db/db.config')
const addProductData = async (product) => {
    const { title, description, price, fields, categId,isused, userid, result ,quantity} = product
    try {
        const [queryresult] = await db.query('INSERT INTO items (title ,description ,price,fields ,categId,isused ,userid,image,quantity) values(?,?,?,?,?,?,?,?,?)',
            [title, description, price, JSON.stringify(fields), categId,isused, userid, result.secure_url,quantity])
        return queryresult
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = addProductData