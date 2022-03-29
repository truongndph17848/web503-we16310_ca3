import User from '../models/auth';

export const userById = async(req, res, next, id) => {
    try {
        const user = await User.findById(id).exec();
        if(!user){
            res.status(400).json({
                message: " khong tim thay san pham"
            })
        }
        req.profile = user;
        req.profile.password = undefined;
        next();
    } catch (error) {
            console.log(error);
    }
}