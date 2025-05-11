// // // //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/products/getCategoryWiseProducts.js
const getProductViaCategoryId = require("../../../lib/product/getProductViaCategoryId");
const getCategoryWiseProducts = async (req, res) => {
    const { categId } = req.params;
    try {
      const products = await getProductViaCategoryId(categId);
      if (!products || products.length === 0) {
        return res.status(404).json({ message: 'No products found for this category' });
      }
      res.status(200).json({ products });
    } catch (err) {
      console.error('Error fetching category-wise products:', err);
      return res.status(500).json({ message: 'Server error' });
    }
  };
  

module.exports = getCategoryWiseProducts;
