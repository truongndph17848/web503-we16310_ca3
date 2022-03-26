import Product from "../models/product";

export const list = async (req, res) =>{
    try {
        const product = await Product.find().exec();
        res.json(product);
    } catch (error) {
        console.log("khong them dc san pham");
        }
}

export const creat = async (req, res) =>{
try {
    const product = await new Product(req.body).save();
    res.json(product);
} catch (error) {
    console.log("khong them dc san pham");
    }
}   



export const read = async (req, res) =>{
    try {
        const product = await Product.findOne({_id: req.params.id}).exec();
        res.json(product);
    } catch (error) {
        console.log("khong them dc san pham");
        }
}

export const remove = async (req, res) =>{
    const filter = {_id: req.params.id};
    try {
        const product = await Product.findOneAndDelete(filter).exec();
        res.json(product);
    } catch (error) {
        console.log("khong them dc san pham");
        }
}

export const update = (req, res) =>{
    console.log("creat");
}
