import express from 'express';
import { createSkillExchangeRequest, getSkillExchangeRequests } from '../controllers/skillExchange.controller.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.post('/', isAuthenticated, createSkillExchangeRequest);
router.get('/', isAuthenticated, getSkillExchangeRequests);

export default router; 