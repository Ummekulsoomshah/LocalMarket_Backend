//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/lib/category/addCategoryFields.js


const db = require('../../db/db.config');

const addCategoryFields = async function (categoryData) {
    const { categoryName, fieldsJSON } = categoryData;

    try {
        const result = await db.query(
            'INSERT INTO categories (name, fields) VALUES (?, ?)',
            [categoryName, fieldsJSON]
        );
        return result;
    } catch (err) {
        throw new Error('Failed to insert category: ' + err.message);
    }
};

module.exports = addCategoryFields;
