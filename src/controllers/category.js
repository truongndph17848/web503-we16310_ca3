import Category from '../models/category';
import Product from '../models/product';

export const create = async(req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Thêm không thành công"
        })
    }
}
export const read = async(req, res) => {
    const condition = { _id: req.params.id };
    try {
        const category = await Category.findOne({ _id: req.params.id }).exec();
        const products = await Product.find({ category }).select('-category').exec();
        res.json({
            category,
            products
        });
    } catch (error) {

    }
}

export const list = async(req, res) => {
    try {
        const category = await Category.find({}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
}

export const remove = async(req, res) => {
    try {
        const category = await Category.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Xóa sản phẩm không thành công"
        })
    }
}
export const update = async(req, res) => {
    const condition = { id: req.params.id }
    const update = req.body;
    try {
        const category = await Category.findOneAndUpdate(condition, update).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Thêm sản phẩm không thành công"
        })
    }
}