const db = require('../../db/db.config');

const getSellerStates = async (userId) => {
    try {
        // Get the total number of products for the seller
        const totalProductsResult = await db.query('SELECT COUNT(*) as totalProducts FROM items WHERE userId = ?', [userId]);



        return {
            totalProducts: totalProductsResult[0][0].totalProducts,
            totalPlacedOrders: 0
        };
    } catch (error) {
        console.error('Error fetching seller states:', error);
        throw error;
    }
};

module.exports = getSellerStates;