//LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/products/addProduct.js
const addProductData = require('../../../lib/product/addProductData')
const cloudinary = require('cloudinary').v2
const fs = require('fs')
require('dotenv').config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const addProduct = async function (req, res, next) {
    try {
        const { title, description, isused, price, categId, quantity } = req.body
        console.log(categId)
        const userid = req.user.id
        const image = req.files?.image

        if (!image) {
            return res.status(400).json({ message: 'Image is required' })
        }

        const result = await cloudinary.uploader.upload(image.tempFilePath)
        fs.unlinkSync(image.tempFilePath) // Cleanup temp file

        const fields = JSON.parse(req.body.fields)
        console.log('fields', fields)

        const product = {
            title,
            description,
            price,
            fields,
            isused,
            userid,
            categId,
            result,
            quantity
        }

        const queryresult = await addProductData(product)
        const insertid = queryresult.insertId
        console.log('insertid', insertid)

        res.status(200).json({
            message: "Post added successfully",
            insertid
        })
    } catch (error) {
        console.error('Error:', error.message)
        res.status(500).json({ message: "Server error", error: error.message })
    }
}

module.exports = addProduct
