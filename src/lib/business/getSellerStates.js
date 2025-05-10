//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/lib/business/getSellerStates.js
const db=require('../../db/db.config')
const getSellerStates = async (sellerId) => {
    try {
        const [orders] = await db.query(
            `SELECT * FROM orders 
             JOIN items ON orders.itemId = items.id 
             WHERE items.userid = ?`, [sellerId]
        );
        return orders;
    } catch (error) {
        throw new Error(error);
    }
}
module.exports = getSellerStates;
