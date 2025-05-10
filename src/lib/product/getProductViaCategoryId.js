//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/lib/product/getProductViaCategoryId.js
const db=require('../../db/db.config')
const getProductViaCategoryId=(categId)=>{
    try {
        const items=db.query('SELECT * FROM items where categId=?',[categId])
        return items
    } catch (error) {
        throw new Error(error)
    }
}
module.exports=getProductViaCategoryId