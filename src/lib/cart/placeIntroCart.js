//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/lib/cart/placeIntroCart.js
const db=require('../../db/db.config')
// const placeIntroCart=async(prodId,userId)=>{
//     try {
//         await db.query('INSERT INTO orders (itemId,userId) VALUES (?,?)',[prodId,userId])
//         return true
//     } catch (error) {
//         throw new Error('Error in placing order',error.message)
//     }
// }
// module.exports = placeIntroCart



const placeIntroCart = async (prodId, userId) => {
    try {
        await db.query('INSERT INTO orders (itemId, userId) VALUES (?, ?)', [prodId, userId]);
        return true;
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = placeIntroCart
