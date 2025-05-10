// //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/category/addCategory.js
// const addCategoryFields = require('../../../lib/category/addCategoryFields')

// const db = require('../../db/db.config');
// const addCategoryFields = async (categoryData) => {
//   return new Promise((resolve, reject) => {
//     const { name, fields } = categoryData;
//     const sql = 'INSERT INTO categories (name, fields) VALUES (?, ?)';

//     db.query(sql, [name, fields], (err, result) => {
//       if (err) {
//         console.error('DB Error:', err);
//         return reject(err);
//       }
//       resolve(result);
//     });
//   });
// };

// module.exports = addCategoryFields;
// src/api/v1/category/addCategory.js

// const db = require('../../db/db.config');



const addCategoryFields = require('../../../lib/category/addCategoryFields'); // Assuming the function is in lib

const addCategory = async (req, res, next) => {
  const { categoryName, fields } = req.body;
  const fieldsJSON = JSON.stringify(fields);

  const categoryData = {
    categoryName,
    fieldsJSON,
  };

  try {
    await addCategoryFields(categoryData);
    res.status(200).json({
      message: 'Category Added Successfully',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = addCategory;
