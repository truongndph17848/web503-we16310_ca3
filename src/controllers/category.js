import mongoose from "mongoose";

const Category = mongoose.model('Category', {name: String});

export const creat = async(req , res) => {
    try {
        const Category = await new Category(req.body).save();
        req.json(Category);
    } catch (error) {
            console.log(error);
    }
}