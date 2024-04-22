import mongoose from "mongoose";

const userRegisSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true, unique: true },
    fname: { type: String, required: true, trim: true },
    lname: { type: String, required: true, trim: true },
    age: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    termAgree: { type: Boolean, required: true },
});

const signInSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
});

// Compile schemas into models
const UserRegistration = mongoose.models.UserRegistration || mongoose.model('UserRegistration', userRegisSchema);
const SignIn = mongoose.models.SignIn || mongoose.model('SignIn', signInSchema);

export { UserRegistration, SignIn };
