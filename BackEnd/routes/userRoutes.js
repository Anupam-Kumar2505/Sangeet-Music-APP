import express from "express";
import {
  getUser,
  loginUser,
  logout,
  signupUser,
  updateUser,
} from "../controllers/userController.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("profile/:username", getUser);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logout);
router.put("/update/:id", protectRoute, updateUser);

export default router;
