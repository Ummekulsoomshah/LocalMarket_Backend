const db=require('../../db/db.config')
const getAnalytics=async()=>{
    try {
        
        const totalUsers=await db.query('SELECT COUNT(*) as totalUsers FROM user WHERE userrole="personal"')
        const totalBusiness=await db.query('SELECT COUNT(*) as totalBusiness FROM user WHERE userrole="bussiness"')
        const totalProducts=await db.query('SELECT COUNT(*) as totalProducts FROM items')
        const totalOrders=await db.query('SELECT COUNT(*) as totalOrders FROM placedorders')
        const totalpendingOrders=await db.query('SELECT COUNT(*) as totalOrders FROM orders')

        const getAnalytics={
            totalUsers:totalUsers[0][0].totalUsers,
            totalBusiness:totalBusiness[0][0].totalBusiness,
            totalProducts:totalProducts[0][0].totalProducts,
            totalOrders:totalOrders[0][0].totalOrders,
            totalpendingOrders:totalpendingOrders[0][0].totalpendingOrders


        }
        return getAnalytics
    } catch (error) {
        throw new Error(error)
    }
}
module.exports=getAnalytics