const db = require('../../../db/db.config')
const completeOrder = async (req, res) => {
    try {
        const userId = req.user.id

        const [orderItems] = await db.query(
            'SELECT itemId FROM orders WHERE userId = ?',
            [userId]
        );
        for (const order of orderItems) {
            const { itemId } = order;
            await db.query(
                'UPDATE items SET quantity = quantity - 1 WHERE id = ? AND quantity >= 1',
                [itemId]
            );
            await db.query('INSERT INTO placedorders(itemId,userId) values(?,?)', [itemId, userId])
        }

        await db.query(
            'DELETE FROM orders WHERE userId = ?',
            [userId]
        );

        res.status(200).json({
            message: 'order completed successfuly'
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports = completeOrder