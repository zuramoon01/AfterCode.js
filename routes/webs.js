// Import Library
import express from "express";

// Import webs Controller
import {
  mainRoutes,
  getHome,
  getCart,
  getTeam,
  getAbout,
  getSingleProduct,
  getNotFound,
} from "../controllers/webs.js";

// Import auth Controller
import ensureAuthenticated from "../controllers/auth.js";

const router = express.Router();

// Middlewares
router.use(express.json());
router.use(express.urlencoded());

// Routes
router.get(mainRoutes.home, getHome);
router.get(`${mainRoutes.cart}/:id`, ensureAuthenticated, getCart);
router.get(mainRoutes.team, getTeam);
router.get(mainRoutes.about, getAbout);
router.get(
  `${mainRoutes.singleProduct}/:id`,
  ensureAuthenticated,
  getSingleProduct
);
router.get(mainRoutes.notFound, getNotFound);

export default router;
