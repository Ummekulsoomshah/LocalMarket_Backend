
// //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/products/addProductData.js
const db = require('../../../db/db.config');

const addProductData = async (product) => {
    try {
        const [result] = await db.query(
            `INSERT INTO items 
            (title, description, price, fields, isused, userid, image, categId, quantity, size)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                product.title,
                product.description,
                product.price,
                JSON.stringify(product.fields),
                product.isused,
                product.userId,
                product.image,
                product.categId,
                product.quantity,
                product.size || null
            ]
        );

        return {
            success: true,
            product: { id: result.insertId, ...product }
        };
    } catch (err) {
        console.error("Add product error:", err);
        return { success: false, message: err.message || 'Server error' };
    }
};

module.exports = addProductData;
