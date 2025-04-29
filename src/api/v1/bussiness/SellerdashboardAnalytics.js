const getSellerStates=require('../../../lib/bussiness/getSellerStates')
const SellerdashboardAnalytics=async(req ,res)=>{
    const id=req.user.id
    try {
        const result=await getSellerStates(id)
        res.status(200).json({
            message:'data retived succcesfuly',
            result
        })
    } catch (error) {
        next(error)
    }
}
module.exports=SellerdashboardAnalytics