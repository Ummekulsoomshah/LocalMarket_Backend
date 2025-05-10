//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/lib/cart/getCartItems.js
const db=require ('../../db/db.config')
const getCartItems=async(userId)=>{
    console.log('userId',userId)
    try {
        const [result] = await db.query(
            `SELECT 
              items.*, 
              orders.id AS order_id,
              orders.created_at AS added_to_cart_at
            FROM orders
            JOIN items ON orders.itemId = items.id
            WHERE orders.userId = ?`,
            [userId]
          );
    console.log('result',result)
    return result
    } catch (error) {
        throw new Error(error)
    }
}
module.exports=getCartItems