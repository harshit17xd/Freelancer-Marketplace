import express from 'express';
import { createServiceRequest, getServiceRequests } from '../controllers/serviceRequest.controller.js';
import { isAuthenticated } from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.post('/', isAuthenticated, createServiceRequest);
router.get('/', isAuthenticated, getServiceRequests);

export default router; 