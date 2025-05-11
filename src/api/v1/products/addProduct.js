
// // // //  //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/api/v1/products/addProduct.js
const path = require('path');
const fs = require('fs').promises;
const addProductData = require('./addProductData');

// Save the image from base64 to file
const saveImage = async (imageBase64, uploadDir) => {
    try {
        const imageBuffer = Buffer.from(imageBase64, 'base64');
        const imageName = `${Date.now()}.png`; // Make sure you append a unique timestamp
        const imagePath = path.join(uploadDir, imageName);
        const imageUrl = `/uploads/${imageName}`; // Image URL to be saved in DB

        await fs.mkdir(uploadDir, { recursive: true });
        await fs.writeFile(imagePath, imageBuffer);

        return imageUrl; // Correct image URL to be saved in DB
    } catch (err) {
        console.error('Image saving error:', err);
        throw new Error('Error saving image');
    }
};

const addProduct = async (req, res) => {
    const startTime = Date.now();

    const {
        title,
        description,
        price,
        quantity,
        categId,
        imageBase64,
        fields,
        isused,
        size
    } = req.body;

    // Step 1: Auth checks
    if (!req.user || !req.user.id || !req.user.userrole) {
        return res.status(401).json({ message: 'Unauthorized: invalid token', processingTime: Date.now() - startTime });
    }

    if (req.user.userrole !== 'business') {
        return res.status(403).json({ message: 'Forbidden: Only business users can add products', processingTime: Date.now() - startTime });
    }

    const userId = req.user.id;

    // Step 2: Input validation
    if (!title || !description || !price || !quantity || !categId || !imageBase64) {
        return res.status(400).json({ message: 'Missing required fields', processingTime: Date.now() - startTime });
    }

    console.log("✅ Authenticated user ID:", userId);

    try {
        const uploadDir = path.join(__dirname, '../../../../uploads');
        const imageUrl = await saveImage(imageBase64, uploadDir);

        const newProduct = {
            title,
            description,
            price,
            quantity,
            categId,
            fields: fields || {},
            isused: isused || 0,
            size: size || null,
            userId,
            image: imageUrl
        };

        const result = await addProductData(newProduct);

        if (!result.success) {
            throw new Error('Database insertion failed');
        }

        return res.status(201).json({
            message: 'Product added successfully',
            product: result.product,
            processingTime: Date.now() - startTime
        });

    } catch (err) {
        console.error('Add product error:', err);
        return res.status(500).json({ message: err.message, processingTime: Date.now() - startTime });
    }
};

module.exports = addProduct;
