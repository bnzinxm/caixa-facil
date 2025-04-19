// src/controllers/marketAuthController.ts
import { Request, Response } from 'express';
import { AuthenticationService } from '../../services/auth/authenticationServices';

const authService = new AuthenticationService();

export const MarketAuthController = {
  register: async (req: Request, res: Response) => {
    const { nome, email, password } = req.body;

    try {
      const result = await authService.Markets.New({ email, password }, nome);

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
        status: '✅ SUCCESS',
        code: 200,
        message: '🛒 Autenticação concluída com sucesso!',
        description: 'O mercado foi autenticado e os tokens foram gerados corretamente.',
        tokens: {
          access_token: result.tokens.accessToken,
          refresh_token: result.tokens.refreshToken,
          expires_in: '7 Dias',
        },
        market: {
          id: result.market.id,
          nome: result.market.nome,
          email: result.market.email,
        },
        timestamp: new Date().toISOString(),
      });
    } catch (error: any) {
      console.log(error);
      // retornar erro em caso de falha na autenticação
      return res.status(400).json({
        success: false,
        message: error.message || 'Erro ao autenticar mercado.',
        timestamp: new Date().toISOString(),
      });
    }
  },
};

export const UserAuthController = {
  register: async (req: Request, res: Response) => {
    const { fullName, email, password } = req.body;

    try {
      const result = await authService.Users.New({ email, password }, fullName);

      return res.status(201).json({
        message: "Usuário criado com sucesso.",
        data: result,
      });
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        error: err.message || "Erro ao registrar usuário.",
      });
    }
  },

  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const result = await authService.Users.Authenticate({ email, password });

      return res.status(200).json({
        status: "✅ SUCCESS",
        code: 200,
        message: "👤 Login de usuário realizado com sucesso!",
        description: "O usuário foi autenticado e os tokens foram gerados corretamente.",
        tokens: {
          access_token: result.tokens.access_token,
          refresh_token: result.tokens.refresh_token,
          expires_in: "7 Dias",
        },
        user: {
          id: result.user.id,
          fullName: result.user.fullName,
          email: result.user.email,
        },
        timestamp: new Date().toISOString(),
      });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({
        success: false,
        message: error.message || "Erro ao autenticar usuário.",
        timestamp: new Date().toISOString(),
      });
    }
  },
};
