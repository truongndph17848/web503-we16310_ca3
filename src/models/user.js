import mongoose, {Schema} from "mongoose";
const userSchema = new Schema({

    username: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    }, 
    email: {
        required: true
    },
    password: {
        required: true
    }

}, { timestamps: true});

export default mongoose.model('User', userSchema);