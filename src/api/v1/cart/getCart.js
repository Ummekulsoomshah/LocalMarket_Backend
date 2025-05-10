//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/cart/getCart.js
const getCartItems=require('../../../lib/cart/getCartItems')
const getCart=async(req ,res )=>{
    try {
        const userId=req.user.id
        const result=await getCartItems(userId)
        if(result){
            return res.status(200).json({
                message:"Cart fetched successfully",
                data:result
            })
        }
    } catch (error) {
        next(error)
    }
}
module.exports=getCart
