const getProducts=require('../../../lib/product/getProducts')
const getAllproducts=async(req ,res,next)=>{
    try {
        const response = await getProducts()
        res.status(200).json({ response })
    } catch (error) {
        next(error)
    }
}
module.exports=getAllproducts()