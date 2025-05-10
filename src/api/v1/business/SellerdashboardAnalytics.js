
//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/business/SellerdashboardAnalytics.js
// LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/business/SellerdashboardAnalytics.js
const getSellerStates = require('../../../lib/business/getSellerStates');

const SellerdashboardAnalytics = async (req, res, next) => {
    const id = req.user.id;
    try {
        const result = await getSellerStates(id);
        res.status(200).json({
            message: 'Data retrieved successfully',
            result
        });
    } catch (error) {
        next(error);  // pass the error to the error handler
    }
};

module.exports = SellerdashboardAnalytics;
