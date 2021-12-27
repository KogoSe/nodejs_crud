import express from "express";
import UserControllers from "./controllers/user.controllers.js";

const UserRouter = express.Router()

UserRouter.post('/',UserControllers.addUser)
UserRouter.get('/',UserControllers.getAllUsers)
export default UserRouter