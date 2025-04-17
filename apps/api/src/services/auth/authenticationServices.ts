// src/services/authenticationService.ts
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { db } from '@api/config/database';
import { MarketCredentials, UserCredentials } from '@api/types/auth/authentication';


export class AuthenticationService {
    Markets = {
        New: async function({ nome, email, password }: MarketCredentials) {
            const [exists] = await db.query("SELECT id FROM markets WHERE email = ?", [email]);

            if ((exists as any[]).length > 0) {
                throw new Error("E-mail já está em uso.");
            }

            const hashedPassword = await hash(password, 10);

            const [result] = await db.query("INSERT INTO markets (nome, email, password) VALUES (?, ?, ?)", [nome, email, hashedPassword]);

            return {
                id: (result as any).insertId,
                email,
            };
        },

        Authenticate: async function ({ email, password }: MarketCredentials) {
            // i'll add logic here at any moment.
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