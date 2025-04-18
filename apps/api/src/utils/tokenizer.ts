import { sign } from 'jsonwebtoken';

export const generateTokens = (payload: Object) => {
    const accessToken = sign(payload, process.env.JWT_SECRET!, {
        expiresIn: '7d',
    });

    const refreshToken = sign(payload, process.env.JWT_REFRESH_SECRET!, {
        expiresIn: '30d',
    });

    return { accessToken, refreshToken };
}