const db = require('../../db/db.config')
const getAnalytics = async () => {
    try {

        const totalUsers = await db.query('SELECT COUNT(*) as totalUsers FROM user WHERE userrole="personal"')
        const totalBusiness = await db.query('SELECT COUNT(*) as totalBusiness FROM user WHERE userrole="bussiness"')
        const totalProducts = await db.query('SELECT SUM(quantity) AS totalProducts from items')
        const totalOrders = await db.query('SELECT COUNT(*) as totalOrders FROM placedorders')
        const totalpendingOrders = await db.query('SELECT COUNT(*) as totalpendingOrders FROM orders')
        const totalRevenew = await db.query(`SELECT SUM(price) AS revenew
FROM items i
JOIN placedorders po ON po.itemId = i.id;`)
        const userGrowth = await db.query(`SELECT 
    DATE_FORMAT(created_at, '%Y-%m') AS month,
    COUNT(*) AS total_users
FROM user
WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 3 MONTH)
GROUP BY month
ORDER BY month;
`)
const sales=await db.query(`SELECT 
    DATE_FORMAT(created_at, '%Y-%m') AS month,
    COUNT(*) AS total_orders
FROM placedorders
WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 3 MONTH)
GROUP BY month
ORDER BY month;
`)
        const getAnalytics = {
            totalUsers: totalUsers[0][0].totalUsers,
            totalBusiness: totalBusiness[0][0].totalBusiness,
            totalProducts: totalProducts[0][0].totalProducts,
            totalOrders: totalOrders[0][0].totalOrders,
            totalpendingOrders: totalpendingOrders[0][0].totalpendingOrders,
            totalRevenew: totalRevenew[0][0].revenew,
            userGrowth,
            sales


        }
        return getAnalytics
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = getAnalytics