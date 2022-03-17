import mongoose from "mongoose";

const user = mongoose.model('user', {name: String});




export const register = async (req, res) => {

    try {
        const user = await new user(req.body).save();
        res.json(user); 
    } catch (error) { 
        console.log(error);
    }

}

export const login = async(req, res) => {
    try {
         // res.json(data.find(item => item.id == req.params.id));
        const user = await user.findOne({_id: req.params.email}).exec();
        res.json(user);
    } catch (error) {
        console.log(error);
    }
}