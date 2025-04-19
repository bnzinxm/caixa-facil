import { Router } from 'express';
import { UserAuthController } from '@api/controllers/auth/authenticationController';

const router = Router();

/**
 * @swagger
 * /api/v2/users/register:
 *   post:
 *     summary: Registra um novo usuário
 *     description: Registra um novo usuário na plataforma.
 *     tags: [Autenticação de Usuário]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: "João da Silva"
 *               email:
 *                 type: string
 *                 example: "joao@email.com"
 *               password:
 *                 type: string
 *                 example: "senhaSuperForte123"
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: E-mail já está em uso
 */
router.post("/register", UserAuthController.register);

/**
 * @swagger
 * /api/v2/users/login:
 *   post:
 *     summary: Autentica um usuário existente
 *     description: Realiza a autenticação de um usuário e retorna tokens de acesso.
 *     tags: [Autenticação de Usuário]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "joao@email.com"
 *               password:
 *                 type: string
 *                 example: "senhaSuperForte123"
 *     responses:
 *       200:
 *         description: Usuário autenticado com sucesso
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
 *                   example: "👤 Login de usuário realizado com sucesso!"
 *                 description:
 *                   type: string
 *                   example: "O usuário foi autenticado e os tokens foram gerados corretamente."
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
 *                       example: "7 Dias"
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     fullName:
 *                       type: string
 *                       example: "João da Silva"
 *                     email:
 *                       type: string
 *                       example: "joao@email.com"
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
 *                   example: "Credenciais inválidas."
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
router.post("/login", UserAuthController.login);

export default router;