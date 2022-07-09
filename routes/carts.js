// Import Library
import express from "express";

// Import carts Controller
import { read, add, remove, getDelete } from "../controllers/carts.js";

// Import auth Controller
import ensureAuthenticated from "../controllers/auth.js";

const router = express.Router();

// Routes
router.get("/read/:email", ensureAuthenticated, read);
router.get("/add/:id/:amount", ensureAuthenticated, add);
router.get("/remove/:id/:amount", ensureAuthenticated, remove);
router.get("/delete/:id", ensureAuthenticated, getDelete);

export default router;
