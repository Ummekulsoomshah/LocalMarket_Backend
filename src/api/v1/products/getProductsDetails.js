// // //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/products/getProductsDetails.js
const db = require('../../../db/db.config');
const getProductDetails = async (req, res) => {
    const { insertid } = req.params;
    try {
      const [product] = await db.query('SELECT * FROM items WHERE id = ?', [insertid]);
      if (!product || product.length === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product[0]);
    } catch (err) {
      console.error('Error fetching product details:', err);
      return res.status(500).json({ message: 'Server error' });
    }
  };
  

module.exports = getProductDetails;
