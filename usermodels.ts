import mongoose,{Schema,Document}from 'mongoose'
export interface IUser extends Document{
username: string;
email: string;
password:string;
}
const userSchema: Schema<IUser>=new Schema({
    username:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength:8,
        select: false
    }
});
const User =  mongoose.model<IUser>('User',userSchema);
export default User;