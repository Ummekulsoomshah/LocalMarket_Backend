const db=require('../../db/db.config')
const getSellerStates=async()=>{
    try {
        const orders=await db.query('SELECT FROM orders')
    } catch (error) {
        
    }
}