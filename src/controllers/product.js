import mongoose from "mongoose";

const Product = mongoose.model('Product', {name: String});




export const create = async (req, res) => {

    try {
        const product = await new Product(req.body).save();
        res.json(product); 
    } catch (error) {
        console.log(error);
    }

}

export const list = async (req, res) => {
try {
    const products = await Product.find({}).exec();
    res.json(data);
} catch (error) {
    console.log(error);
    }
}

export const get = async(req, res) => {
    try {
         // res.json(data.find(item => item.id == req.params.id));
        const product = await Product.findOne({_id: req.params.id}).exec();
        res.json(product);
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({_id: req.params.id}).exec();
        res.json(product);
    } catch (error) {
        onsole.log(error);
    }
    
}
//update


export const update = async (req, res) => {
    const condition = { id: req.params.id}
    const update = req.body;

    try {
        const product = await Product.findOneAndDelete(condition, update).exec();
        // const result = data.map(item => item.id == req.params.id ? req.body : item)
        res.json(result);
    } catch (error) {
        res.status(400).json({
            error: "Xóa sản phẩm không thành công"
        })
    }
}