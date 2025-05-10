//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/admin/dashboardAnalytics.js
const getAnalytics=require('../../../lib/admin/getAnalytics')
const dashboardAnalytics = async (req, res, next) =>{
    try {
        const result=await getAnalytics()
        if(result){
            res.status(200).json({
                message:'success',
                data:result
            })
        }
    } catch (error) {
        next(error)
    }
}
module.exports=dashboardAnalytics
