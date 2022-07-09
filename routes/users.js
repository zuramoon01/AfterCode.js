// Import Library
import express from "express";

// Import users Controller
import {
  userRoutes,
  getSignin,
  postSignin,
  getLogin,
  postLogin,
  getLogout,
} from "../controllers/users.js";

// Import auth Controller
import ensureAuthenticated from "../controllers/auth.js";

const router = express.Router();

// Middlewares
router.use(express.json());
router.use(express.urlencoded());

// Routes
router.route(userRoutes.signin).get(getSignin).post(postSignin);
router.route(userRoutes.login).get(getLogin).post(postLogin);
router.get(userRoutes.logout, ensureAuthenticated, getLogout);

export default router;
