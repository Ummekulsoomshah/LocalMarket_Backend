//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/category/allCategory.js
const getAllCategories = require('../../../lib/category/getAllCategories')

const allCategory = async function (req, res, next) {
    try {
        const categories = await getAllCategories()
        res.status(200).json({
            categories
        })
    } catch (error) {
        next(error)
    }
}

module.exports = allCategory