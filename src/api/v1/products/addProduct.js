const addProductData = require('../../../lib/product/addProductData')
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});

const addProduct = async function (req, res, next) {
    try {
        const { title, description, isused, price ,categId} = req.body
        const userid = req.user.id
        const image = req.files.image
        const result = await cloudinary.uploader.upload(image.tempFilePath)
        const fields = JSON.parse(req.body.fields);
        console.log('fields', fields)

        const product = {
            title, description, price, fields, isused, userid, result
        }
        const queryresult = await addProductData(product)
        const insertid = queryresult.insertId
        console.log(insertid)
        res.status(200).json({
            message: "post added successfully",
            insertid
        })
    } catch (error) {
        next(error)
    }
}

module.exports = addProduct