import express from "express";
import {register, login, logout, getUser, updateProfile, updatePassword} from "../controllers/User.Controller.js";
import { isAuthenticated } from "../middlewares/auth.js";

const UserRouter=express.Router();

UserRouter.post("/register", register);
UserRouter.post("/login", login);
UserRouter.get("/logout", isAuthenticated, logout);
UserRouter.get("/getuser", isAuthenticated, getUser);
UserRouter.put("/update/profile", isAuthenticated, updateProfile);
UserRouter.put("/update/password", isAuthenticated, updatePassword)

export default UserRouter;