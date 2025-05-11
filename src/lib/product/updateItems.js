// //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/lib/product/updateItems.js
// const db = require('../../db/db.config')
// const updateItems = async (cartItems) => {
//     try {
//         for (const item of cartItems) {
//             const result = await db.query('delete from items where id=?', [item.id])

//         }
//         return { message: 'Items updated successfully' };

//     } catch (error) {
//         console.error('Error updating items:', error);
//         throw error;
//     }
// }
// module.exports = updateItems;