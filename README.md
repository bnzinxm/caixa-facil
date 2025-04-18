<p align="center">
  <img src="./md_assets/bytesoft%20(light).png" alt="ByteSoft Logo" height=""/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Version-v1.0.0-green"/>
  <img src="https://img.shields.io/badge/Author-ByteSoft_Inc.-blue"/>
  <img src="https://img.shields.io/badge/Website-https%3A%2F%2Fcaixafacil.org%2F-yellow"/>
  <img src="https://img.shields.io/badge/Director-%40bnzin_xm-red"/>
  <img src="https://img.shields.io/badge/Architecture-%40bnzin_xm-lightgreen"/>
</p>

---

# 🛒 Caixa Fácil v1 (BETA)

> Plataforma moderna e robusta para controle de **vendas**, **estoque**, **caixa** e **logística**, feita sob medida para o pequeno e médio comércio.

---

## 📦 Sobre o projeto

O **Caixa Fácil** é um sistema full-stack completo que centraliza toda a gestão operacional de estabelecimentos comerciais em um único lugar.
Ele oferece uma experiência fluida, responsiva e segura tanto para operadores quanto para gestores, com foco em:

- Agilidade no ponto de venda
- Controle de estoque em tempo real
- Relatórios financeiros automatizados
- Cadastro inteligente de produtos e categorias
- Escalabilidade e modularidade

---

## 🧱 Arquitetura Geral

```
caixafacil-v2/
├── apps/
│ ├──   api/ → Backend (Express + Prisma)
  │ ├── web/ → Frontend (React + Vite)
  │ └── mobile/ → App Mobile (React Native + Expo)
  ├── packages/
  │ ├── config/ → Configs compartilhados
  │ ├── types/ → Tipagens globais
  │ └── validators/ → Zod schemas validados
  ├── docker/ → Configurações de container
  ├── .github/ → Workflows CI/CD
  ├── docker-compose.yml
  ├── .env.example └── package.json

```


---

## 🧰 Tecnologias e Ferramentas

### Backend

- **Express.js** com **TypeScript**
- **Prisma ORM** + MySQL
- **JWT + Refresh Tokens**
- Segurança com **Helmet**, **CORS**, **Rate Limiter**
- Logger customizado com **Winston + Morgan**
- **Zod** para validação de entrada

### Frontend

- **React** + **Vite** + **Electron**
- **TailwindCSS** + **ShadCN UI**
- **Framer Motion** para animações fluidas
- **React Query** para gestão de requisições
- UI responsiva e leve

### Mobile

- **React Native + Expo**
- **NativeWind** para Tailwind no mobile
- Navegação com **React Navigation**
- **Zustand** para estado local

### DevOps

- **Docker** e **docker-compose**
- **GitHub Actions** para CI/CD
- Estrutura em **monorepo** via `npm workspaces`
- Possibilidade de integração futura com **Redis**, **S3** e **Cloud Functions**

---

## 🔒 Segurança

- Tokens curtos + refresh tokens com expiração
- Limitação de requisições por IP
- Headers seguros via Helmet
- Logs e auditoria com separação por ambiente
- Autenticação por middleware e RBAC simples

---

## 🚀 Objetivos da V1

| Módulo             | Status     | Descrição                                           |
|--------------------|------------|------------------------------------------------------|
| Autenticação       | 🔄 Em andamento  | JWT + Refresh Token, login seguro                   |
| Cadastro de Produtos | 🔄 Em andamento  | CRUD completo com categorias                        |
| Controle de Estoque| 🔄 Em andamento | Saída e entrada automatizada                      |
| Fluxo de Caixa     | 🔄 Em andamento | Relatórios de entrada, saída e totais            |
| Integração Mobile  | 🔄 Em progresso | Aplicativo com funcionalidades essenciais        |
| Painel Gerencial   | 🔜 Planejado | Visão geral com gráficos e dashboards              |

---

## 🌐 Links

- 🔗 Site oficial: [https://caixafacil.org](https://caixafacil.org)
- 🧠 Projeto e arquitetura: [@bnzin_xm](https://instagram.com/bnzin_xm)
- 🏢 Desenvolvido por: **ByteSoft Inc.**

---

<p align="center">
  <i>ByteSoft Inc. — tecnologia na medida para quem empreende.</i>
</p>
