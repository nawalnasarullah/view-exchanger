import { User } from "../models/user.model.js";

export default class User {
  
  async createNewUser(req, res, next) {

    const user = req.body;
    try{
    await User.create(user);
      res.json({
        message: "New users created successfully"
      });
    }catch(error){
      next(error);
    }
  }

  async getAllUsers(req, res, next) {
    try{
      const users = await User.find();
      res.json({
        message: "Get All Users",
        users
      });
    }catch(error){
      next(error);
    }
  }

  async getUser(req, res, next) {
    const {id} = req.query;
    try{
      const user = await User.findById(id);
      res.json({
        message:"single user caleed",
        user
      });
    }catch(error){
      next(error);
    }
  }

  async updateUser(req, res, next) {
    const body = req.body;
    const {id} = req.query;
    try{
      const user = await User.findByIdAndUpdate(id, body);
      res.json({
        message: "Updated the user",
      });
    }catch(error){
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    const {id} = req.query;
    try{
      const user = await User.findByIdAndDelete(id);
      res.json({
        message: "Deleted the user",
      });
    }catch(error){
      next(error);
    }
  }
}
