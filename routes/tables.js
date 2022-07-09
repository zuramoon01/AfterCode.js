// Import Library
import express from 'express';

// Import tables Controller
import { createTable, deleteTable } from '../controllers/tables.js';

const router = express.Router();

// Routes
router.get('/create/:name', createTable);
router.get('/delete/:name', deleteTable);

export default router;
