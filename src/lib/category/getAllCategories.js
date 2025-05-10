//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/lib/category/getAllCategories.js
const db = require('../../db/db.config')
const getAllCategories = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM categories');
        return rows; // ✅ Only return the data, not metadata
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = getAllCategories;