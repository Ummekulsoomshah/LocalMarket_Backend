//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/products/getProductsDetails.js
const db=require('../../../db/db.config')
const getProductDetails=async function(req,res,next) {
    const {insertid}=req.params
    try{
        const [details] = await db.query('SELECT * FROM items WHERE id = ?', [insertid]);
        if (details.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        console.log('details', details[0])
        res.status(200).json(details[0]);
    }catch(err){
        next(err)
    }
}

module.exports=getProductDetails