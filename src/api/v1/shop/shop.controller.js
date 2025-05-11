// /api/v1/shop/shop.controller.js
const db = require('../../../db/db.config');

// exports.getShopItems = async (req, res) => {
//   try {
//     const [results] = await db.query('SELECT * FROM items');
//     res.status(200).json({ items: results }); // ✅ Wrapped in 'items' key
//   } catch (error) {
//     console.error('Error fetching shop items:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };


exports.getShopItems = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM items');
    res.status(200).json({ items: results }); // ✅ Wrapped in 'items' key
  } catch (error) {
    console.error('Error fetching shop items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
