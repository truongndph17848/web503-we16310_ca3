import mongoose, { Schema} from "mongoose";
import { createHmac } from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    salt: {
        type: String
    },
    role: {
        type: String,
        default: 0
    }
}, {timestamps: true});



    userSchema.pre("save", function(next){
        this.salt = uuidv4()   // login
        this.password = this.encryptPassword(this.password)    //tất của register
        next();
    });



    userSchema.methods = {

        // login - so sánh xem pass nhập vào (mã hóa pass ) xem có giống pass cũ ko
        authenticate(password){
        return this.password === this.encryptPassword(password)    
        },


        // mã hóa pass - regiter
        encryptPassword(password){
            if(!password) return
            try {
            return createHmac("sha256", this.salt).update(password).digest("hex");    
            } catch (error) {
                console.log(error);
            }

        }
    }
export default mongoose.model('User', userSchema)
