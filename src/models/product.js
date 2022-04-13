import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types;

const productSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true,
        index: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    }
}, { timestamps: true });

productSchema.index({ "$**": 'text' });

export default mongoose.model('Product', productSchema);