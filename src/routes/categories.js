
//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/routes/categories.js
const router=require('express').Router()
const addCategory = require('../api/v1/category/addCategory')
const allCategory=require('../api/v1/category/allCategory')
const getCategoriesFields=require('../api/v1/category/getCategoriesFields')


router.get('/categories',allCategory)
router.get('/getCategorieFields/:category',getCategoriesFields)

router.post('/addcategory', addCategory);

module.exports=router