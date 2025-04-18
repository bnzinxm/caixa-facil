// src/routes/marketAuthRoutes.ts
import { Router } from 'express';
import { MarketAuthController } from '@api/controllers/auth/authenticationController';

const router = Router();

router.post("/register", MarketAuthController.register);
router.post("/login", MarketAuthController.login);

export default router;
