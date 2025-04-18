const getProductViaCategoryId = require("../../../lib/product/getProductViaCategoryId")

const getCategoryWiseProducts = async (req, res, next) => {
    const { categId } = req.params
    try {
        const response = await getProductViaCategoryId(categId)
        res.status(200).json({ response })
    } catch (error) {
        next(error)
    }
}
module.exports = getCategoryWiseProducts