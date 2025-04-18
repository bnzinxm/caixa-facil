// src/services/authenticationService.ts
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { db } from '@api/config/database';
import { MarketCredentials, UserCredentials } from '@api/types/auth/authentication';
import logger from '@api/config/logger';


export class AuthenticationService {
    Markets = {
        New: async function({ nome, email, password }: MarketCredentials) {
            const [exists] = await db.query("SELECT id FROM markets WHERE email = ?", [email]);

            if ((exists as any[]).length > 0) {
                logger.warn(`TENTATIVA DE REGISTRO COM E-MAIL JÁ EM USO: ${email}`);
                throw new Error("E-mail já está em uso.");
            }

            const hashedPassword = await hash(password, 10);

            const [result] = await db.query("INSERT INTO markets (name, email, password) VALUES (?, ?, ?)", [nome, email, hashedPassword]);

            logger.info(`NOVO MERCADO REGISTRADO: ${email}`);
            return {
                success: true,
                message: '🛒 Novo mercado registrado com sucesso!',
                market: {
                  id: (result as any).insertId,
                  email,
                },
                timestamp: new Date().toISOString(),
              };
        },

        Authenticate: async function ({ email, password }: MarketCredentials) {
            // primeiro, verificar se o mercado existe.

            const [result] = await db.query(
                "SELECT id, email, password FROM markets WHERE email = ?",
                [email]
            );

            const market = (result as any[])[0];

            if (!market) {
                logger.warn(`FALHA NA AUTENTICAÇÃO: Mercado não encontrado com o e-mail: ${email}`);
                throw new Error("Mercado não encontrado!");
            }

            // depois, verificar se a senha está correta.
            const passwordMatches = await compare(password, market.password);

            if (!passwordMatches) {
                logger.warn(`FALHA NA AUTENTICAÇÃO: Senha incorreta para o e-mail: ${email}`);
                throw new Error("Senha incorreta!");
            }

            // gerar o token jwt

            const token = sign(
                { market_id: market.id, email: market.email },
                process.env.JWT_SECRET as string,
                { expiresIn: '7d' } // token expira em 7 dias.
            );

            logger.info(`Mercado autorizado com sucesso: ${email}`);
            return { token };
        },

        Delete: async function (id: number) {
            // i'll add logic here at any moment.
        }

    }
    Users = {
        New: async function({ email, password }: UserCredentials) {
            // i'll add logic here at any moment.
        },

        Authenticate: async function ({ email, password }: UserCredentials) {
            // i'll add logic here at any moment.
        },

        Delete: async function (id: number) {
            // i'll add logic here at any moment.
        }
    }
}