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
 *     summary: Concede acesso à plataforma com uma conta existente.
 *     description: Realiza a autenticação de um mercado e retorna tokens de acesso.
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
 *         description: Mercado autenticado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "✅ SUCCESS"
 *                 code:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "🛒 Autenticação concluída com sucesso!"
 *                 description:
 *                   type: string
 *                   example: "O mercado foi autenticado e os tokens gerados corretamente."
 *                 tokens:
 *                   type: object
 *                   properties:
 *                     access_token:
 *                       type: string
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                     refresh_token:
 *                       type: string
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                     expires_in:
 *                       type: string
 *                       example: "15 minutos"
 *                 market:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 123
 *                     email:
 *                       type: string
 *                       example: "mercado@esquina.com"
 *                 timestamp:
 *                   type: string
 *                   example: "2025-04-18T12:34:56.789Z"
 *       400:
 *         description: E-mail ou senha incorretos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "E-mail ou senha incorretos!"
 *       404:
 *         description: Mercado não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Mercado não encontrado com o e-mail fornecido!"
 *       500:
 *         description: Erro interno do servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Erro ao processar a autenticação. Tente novamente mais tarde."
 */

router.post("/login", MarketAuthController.login);

export default router;
