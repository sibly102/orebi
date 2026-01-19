import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';
const addProduct = async (req, res) => {
   try {
    const { 
        _type,
        name, 
        price, 
        description, 
        category, 
        brand, 
        badge, 
        discountedPercentage, 
        isAvailable, 
        offer, 
        tags } = req.body;

  
        if(!name){
            return res.status(400).json({ success: false, error: 'Name is required'});
        }
        if(!price){
            return res.status(400).json({ success: false, error: 'Price is required'});
        }
        if (isNaN(Number(price))) {
            return res.status(400).json({ success: false, error: 'Price must be a valid number' });
        }
        if(!category){
            return res.status(400).json({ success: false, error: 'Category is required'});
        }
        if(!description){
            return res.status(400).json({ success: false, error: 'Description is required'});
        }
        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];
        let imageArray = [image1, image2].filter((item) => !!item);

        if (imageArray.length === 0) {
            return res.status(400).json({ success: false, error: 'At least one image is required' });
        }

        let imageUrl = await Promise.all(
            imageArray.map(async (item) => {
                try {
                    const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                    return result.secure_url;
                } catch (uploadErr) {
                    throw new Error(`Cloudinary upload failed for ${item.originalname}: ${uploadErr.message}`);
                }
            })
        );
        let parsedTags = [];
        if (Array.isArray(tags)) {
            parsedTags = tags;
        } else if (typeof tags === 'string' && tags.trim() !== '') {
            try {
                parsedTags = JSON.parse(tags);
                if (!Array.isArray(parsedTags)) parsedTags = parsedTags ? [parsedTags] : [];
            } catch (e) {
                parsedTags = tags.split(',').map(tag => tag.trim()).filter(Boolean);
            }
        }
        const productData = {
            _type:_type ? _type : "",
            name, 
            price:Number(price), 
            discountedPercentage: Number(discountedPercentage),
            category, 
            badge: badge === "true" ? "true" : "false",
            brand: brand ? brand : "",
            isAvailable: isAvailable === 'true' ? true : false,
            offer: offer === 'true' ? true : false,
            tags: tags ? parsedTags : [],
            images: imageUrl,
            description,
        };
          const product = new productModel(productData);
          await product.save();
          res.send({ success: true, message: `${name} added successfully` });
    } catch (error) {
           console.log(error);
          res.json({ success: false, message: error.message });
    }
};
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body._id);
        res.json({ success: true, message: "Product removed successfully" });
    } catch (error) {
        console.log('error', error)
       return res.json({ success: false, error: error.message });
    }
};
const listProducts = async (req, res) => {
    try {
        const total = await productModel.countDocuments({});
        const products = await productModel.find({});
        if (products.length > 0) {
            res.send({ success: true, products, total });
        } else {
            return res.json({ success: false, message: "Product not found" });
        }
        
    } catch (error) {
        console.log('error', error);
       return res.json({success: false, error: error.message});
    }
};
const singleProduct = async (req, res) => {
    try {
     const { _id } = req.body;
     const product = await productModel.findById(_id);
     if (!product) {
         return res.json({ success: false, message: "Product not found" });
     }
     res.json({ success: true, product });
    } catch (error) {
        console.log('error', error);
        return res.json({ success: false, message: error.message});
    }
};

export { addProduct, removeProduct, listProducts, singleProduct };