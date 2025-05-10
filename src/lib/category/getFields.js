//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/lib/category/getFields.js
const db = require('../../db/db.config');

const getFields = async (category) => {
    try {
        const [rows] = await db.query('SELECT fields FROM categories WHERE name = ?', [category]);
        return rows;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = { getFields }; // ✅ EXPORT as named object
