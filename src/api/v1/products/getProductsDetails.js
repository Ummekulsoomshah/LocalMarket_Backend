const {getSimilarProducts} =require('./recommend')
const db=require('../../../db/db.config')
const getProductDetails=async function(req,res,next) {
    const {insertid}=req.params
    try{
        const [details] = await db.query('SELECT * FROM items WHERE id = ?', [insertid]);
        if (details.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const allProducts = await db.query('SELECT * FROM items');
        const similarProducts = getSimilarProducts(details[0], allProducts[0]);
        console.log('similarProducts', similarProducts)
        console.log('details', details[0])
        res.status(200).json({details:details[0], similarProducts});
    }catch(err){
        next(err)
    }
}

module.exports=getProductDetails