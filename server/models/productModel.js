import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    _type: {
        type: String,
        required: false,
        default: "",
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true
    },
    brand: {
        type: String,
    },
    badge: {
        type: String,
    },
    discountedPercentage: {
        type: Number,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    offer: {
        type: Boolean,
        default: false,
    },
    tags: {
        type: [String]
    }
        
});
const productModel = mongoose.models.product || mongoose.model('Product', productSchema);

export default productModel;