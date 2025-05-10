//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/category/getCategoriesFields.js
const { getFields } = require("../../../lib/category/getFields");

const getCategoriesFields = async function (req, res, next) {
    const { catagory } = req.params;
    try {
        const response=await getFields(catagory)
        if (response.length === 0) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ fields: response[0].fields });
    } catch (err) {
        next(err);
    }
}
module.exports=getCategoriesFields