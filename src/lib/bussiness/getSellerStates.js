const db = require('../../db/db.config');

const getSellerStates = async (userId) => {
    try {
        const totalProductsResult = await db.query('SELECT SUM(quantity) AS totalProducts FROM items WHERE userId = ?', [userId]);
        const totalPlacedOrders = await db.query(`SELECT COUNT(*) AS placed_count
FROM placedorders po
JOIN items i ON po.itemId = i.id
WHERE i.userid = ?;`, [userId])
        const totalRevenew = await db.query(`select sum(price) as 
    revenew from items i join placedorders po on i.id=po.itemId where i.userid=?`, [userId])
        const totalpendingOrders = await db.query(`SELECT COUNT(*) AS pending_count
FROM orders o
JOIN items i ON o.itemId = i.id
WHERE i.userid = ?;`, [userId])
        const [monthlySales] = await db.query(`
      SELECT 
    DAY(created_at) AS day,
    COUNT(*) AS sales
FROM 
    PlacedOrders
WHERE 
    MONTH(created_at) = MONTH(CURRENT_DATE())
    AND YEAR(created_at) = YEAR(CURRENT_DATE())
GROUP BY 
    day
ORDER BY 
    day;

    `);


        console.log('totalPlacedOrders', totalPlacedOrders)
        return {
            totalProducts: totalProductsResult[0][0].totalProducts,
            totalPlacedOrders: totalPlacedOrders[0][0].placed_count,
            totalRevenew: totalRevenew[0][0].revenew,
            totalpendingOrders: totalpendingOrders[0][0].pending_count,
            monthlySales: monthlySales.map(entry => ({
                day: `Day ${entry.day}`,
                sales: entry.sales
            }))
        };
    } catch (error) {
        console.error('Error fetching seller states:', error);
        throw error;
    }
};

module.exports = getSellerStates;