import express from "express";
import { changePassword, forgetPassword, loginuser, logoutUser, registerUser, Verification, verifyOTP } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { userSchema, validateUser } from "../validators/userValidate.js";

const router=express.Router();

router.post("/register",validateUser(userSchema),registerUser);
router.post("/verify",Verification);
router.post("/login",loginuser);
router.post("/logout",isAuthenticated,logoutUser);
router.post("/forgot-password",forgetPassword);
router.post("/verify-otp/:email",verifyOTP);
router.post("/change-password/:email",changePassword);


export default router;