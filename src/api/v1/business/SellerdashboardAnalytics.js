
//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/business/SellerdashboardAnalytics.js
// src/api/v1/business/SellerdashboardAnalytics.js
const getSellerStates = require('../../../lib/business/getSellerStates');

const SellerdashboardAnalytics = async (req, res, next) => {
    const id = req.user?.id || 1;  // use fallback if req.user is undefined
    try {
        const result = await getSellerStates(id);
        res.status(200).json({
            message: 'Data retrieved successfully',
            result
        });
    } catch (error) {
        next(error);  // pass error to middleware
    }
};

module.exports = SellerdashboardAnalytics;
