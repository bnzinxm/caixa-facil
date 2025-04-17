// src/services/authenticationService.ts
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { db } from '@api/config/database';
import { MarketCredentials, UserCredentials } from '@api/types/authentication';


export class AuthenticationService {
    Markets = {
        New: async function({ email, password }: MarketCredentials) {
            // i'll add logic here at any moment.
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