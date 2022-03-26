import User from "../models/auth";

export const register = async (req, res) =>{
    try {
        const register = await new User(req.body).save();
        res.json(register);
    } catch (error) {
        console.log("khong them dc san pham");
        }
    }   


    export const login = async (req, res) =>{
        try {
            const lg = await User.findOne({_id: req.params.id}).exec();
            res.json(lg);
        } catch (error) {
            console.log(" dang nhap that bai");
            }
    }