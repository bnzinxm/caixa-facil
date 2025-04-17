import express from 'express';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { db } from './config/database';

// instances

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// rate limiter para evitar o abuso de requests.

app.use(rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutos
     max: 100, // limita a 100 requisições por IP
}));

// rota inicial de teste.

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
});

const PORT = process.env.PORT || 3333;

const start = async () => {
     try {
          // Teste de conexão com o banco
          const connection = await db.getConnection();
          await connection.ping();
          connection.release();
          console.log('✅ Conexão com o banco de dados estabelecida com sucesso!');
     } catch (error) {
          console.error('❌ Erro ao conectar com o banco de dados:', error);
          process.exit(1); // Encerra a aplicação se der erro
     }

     await app.listen(PORT, () => {
          console.log(`API Rodando na porta: ${PORT}`);
     })
}

start();