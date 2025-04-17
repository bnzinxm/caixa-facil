// src/controllers/marketAuthController.ts
import { Request, Response } from 'express';
import { AuthenticationService } from '../../services/auth/authenticationServices';

const authService = new AuthenticationService();

export const MarketAuthController = {
  register: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const result = await authService.Markets.New({ email, password });

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
};