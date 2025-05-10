//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/cart/addTocart.js
const placeIntroCart=require('../../../lib/cart/placeIntroCart')
const addToCart=async (req, res) => {
    const {prodId}=req.params
    const userId=req.user.id
    console.log('userId1',userId)
    try {
        const result=await placeIntroCart(prodId,userId)
        if (result) {
            res.status(200).json({status:true,message:"Product added to cart successfully"})
        } else {
            res.status(500).json({status:false,message:"Error in adding product to cart"})
        }
    } catch (error) {
        next(error)
    }
}
module.exports=addToCart