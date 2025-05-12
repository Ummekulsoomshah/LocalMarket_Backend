const db=require('../../db/db.config')
const getProducts=async()=>{
    try {
        const products=await db.query('select * from items')
        return products
    } catch (error) {
        throw new Error(error.message)
    }
}
module.exports=getProducts