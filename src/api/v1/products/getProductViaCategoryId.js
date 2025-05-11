const db = require('../../db/db.config');

const getProductViaCategoryId = async (categId) => {
  try {
    // Query products by category ID
    const [products] = await db.query('SELECT * FROM products WHERE categId = ?', [categId]);

    return products;
  } catch (err) {
    console.error('Error fetching products by category:', err);
    throw new Error('Error fetching products.');
  }
};

module.exports = getProductViaCategoryId;
