// src/config/swagger.ts

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

// definições principais do swagger

const swaggerOptions = {
    definition: {
        openapi: "3.0.0", // versão da openapi
        info: {
            title: "API Do Caixa Fácil",
            version: "1.0.0",
            description: "Documentação da API do Caixa Fácil V2 para autenticação e mercado.",
        },
    },
    apis: ['./src/routes/**/*.routes.ts'] // caminho para o arquivo de rotas.
}

// gerar a documentação a partir dos comentários do código

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export function setupSwagger(app: Application) {
    // monta a rota da documentação swagger.
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}