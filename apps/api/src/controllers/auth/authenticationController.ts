// src/controllers/marketAuthController.ts
import { Request, Response } from 'express';
import { AuthenticationService } from '../../services/auth/authenticationServices';

const authService = new AuthenticationService();

export const MarketAuthController = {
  register: async (req: Request, res: Response) => {
    const { nome, email, password } = req.body;

    try {
      const result = await authService.Markets.New({ nome, email, password });

      return res.status(201).json({
        message: 'Mercado criado com sucesso.',
        data: result,
      });
    } catch (err: any) {
        console.log(err);
      return res.status(400).json({
        error: err.message || 'Erro ao registrar mercado.',
      });
    }
  },

  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      // autenticar o mercado
      const result = await authService.Markets.Authenticate({ email, password });

      // retornar sucesso com o token JWT
      return res.status(200).json({
        success: true,
        message: '🛒 Mercado autenticado com sucesso!',
        token: result.token, // o token retornado do serviço de autenticação
        timestamp: new Date().toISOString(),
      });
    } catch (error: any) {
      // retornar erro em caso de falha na autenticação
      return res.status(400).json({
        success: false,
        message: error.message || 'Erro ao autenticar mercado.',
        timestamp: new Date().toISOString(),
      });
    }
  },
};