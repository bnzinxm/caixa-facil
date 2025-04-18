// src/routes/marketAuthRoutes.ts
import { Router } from 'express';
import { MarketAuthController } from '@api/controllers/auth/authenticationController';

const router = Router();

/**
 * @swagger
 * /api/v2/auth/register:
 *   post:
 *     summary: Registra um novo mercado
 *     description: Registra um novo mercado na plataforma.
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Mercadinho da Esquina"
 *               email:
 *                 type: string
 *                 example: "mercado@esquina.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Mercado registrado com sucesso
 *       400:
 *         description: E-mail já está em uso
 */

router.post("/register", MarketAuthController.register);

/**
 * @swagger
 * /api/v2/auth/login:
 *   post:
 *     summary: Te concede acesso á plataforma por uma conta existente.
 *     description: Te concede acesso á plataforma.
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "mercado@esquina.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Mercado autorizado com sucesso
 *       400:
 *         description: E-mail já está em uso
 */

router.post("/login", MarketAuthController.login);

export default router;
