import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";

export default class Auth {


  async signUp(req, res, next) {
    const user = req.body;

    try {
        if (user.avatar) {
            const uploadResult = await cloudinary.uploader
                .upload(user.avatar, {
                    folder: "view-exchanger",
                })
                .catch((error) => {
                    return next(error);
                });

            if (uploadResult) {
                user.avatar = uploadResult.secure_url;
            }
        } else {
            user.avatar = "https://www.w3schools.com/howto/img_avatar.png";
        }

        user.password = await bcrypt.hash(user.password, 10);

        await User.create(user);

        res.json({
            success: true,
            message: "User registered successfully",
        });
    } catch (error) {
        next(error);
    }
}

  async login(req, res, next) {
    const user = req.body;
    

    if (!user.email) return next(new Error("Provide the email"));
    if (!user.password) return next(new Error("Provide the email"));

    const dbUser = await User.findOne({ email: user.email });
    
    if (dbUser === null) return next(new Error("This user is not registered"));

    const isPasswordMatched = await bcrypt.compare(
      user.password,
      dbUser.password
    );

    if (!isPasswordMatched) return next(new Error("Invalid password"));

    const token = jwt.sign({
      id: dbUser._id,
      username: dbUser.username,
      email: dbUser.email
    }, process.env.JWT_SECRET, {expiresIn: '1hr'});


    try {
      res.cookie('auth_token', token, {maxAge: 900000, httpOnly: true, secure: true}).json({
        message: "User logged in successfully",
        success: true,
        token
      });
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
   
    try {
      res.cookie('auth_token', null, {expiresIn: Date.now()}).json({
        success: true,
        token,
        message: "You are logged out"
      });
    } catch (error) {
      next(error);
    }
  }
}
