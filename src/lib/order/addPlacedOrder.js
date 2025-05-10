//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/lib/order/addPlacedOrder.js
const db = require('../../db/db.config')
const addPlacedOrder = async (userId, cartItems) => {
    try {
        for (const item of cartItems) {
            console.log(item)
            const { id } = item
            const result = db.query('INSERT INTO placedOrders (itemId,userId) VALUES (?,?)', [id, userId])
            await db.query('delete from orders where id=?', [id])

        }
        return { message: "Order Placed Successfully" }
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = addPlacedOrder