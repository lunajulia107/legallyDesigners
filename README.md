# Legally Designers

🌐 Site oficial da **Legally Designers**, uma agência criativa especializada em design, marketing e desenvolvimento web. Este projeto é uma landing page simples, criada para divulgação dos trabalhos da agência, com foco em:

* Design Visual
* Gestão de Redes Sociais
* Sites Estratégicos

---

## Sobre o Projeto

⚙️ O projeto é dividido em duas partes principais: o backend em PHP e o frontend em React com TypeScript, utilizando Vite como bundler.

---

## Estrutura do Projeto

```
legallyDesigners/
│
├── backend/                🖥️ Código do backend (API)
│   ├── config/             ⚙️ Configurações do banco de dados, ambiente etc.
│   ├── controllers/        🎛️ Controladores (ex: ContatoController.php)
│   ├── models/             📦 Modelos do banco de dados (ex: Contato.php)
│
├── frontend/               💻 Código do frontend (React + TypeScript)
│   ├── node_modules/       📚 Dependências do frontend
│   ├── public/             🗂️ Arquivos públicos estáticos
│   ├── src/                💾 Código fonte do frontend
│   │   ├── components/     🔧 Componentes React reutilizáveis
│   │   ├── pages/          📄 Páginas da aplicação
│   │   ├── App.tsx         🚀 Componente principal
│   │   └── main.tsx        🎯 Ponto de entrada do React
│   ├── package.json        📦 Configuração do npm do frontend
│   ├── vite.config.ts      ⚙️ Configuração do Vite
│   └── tsconfig.json       📜 Configuração do TypeScript
│
├── .gitignore              🚫 Arquivos e pastas ignorados pelo Git
└── README.md               📖 Este arquivo
```

---

## Tecnologias Utilizadas

* 🖥️ **Backend:** PHP com arquitetura MVC simples
* ⚛️ **Frontend:** React + TypeScript
* 📦 **Bundler:** Vite
* 🛢️ **Banco de Dados:** MySQL (configuração no backend)
* 📦 **Gerenciamento de dependências:** npm/yarn para frontend

---

## Como Rodar o Projeto

### 1. Configurar o Backend

* 📂 Acesse a pasta `backend`

* 📝 Crie um arquivo `.env` para configurar a conexão com o banco, por exemplo:

  ```
  DB_HOST=localhost
  DB_NAME=nome_banco
  DB_USER=root
  DB_PASS=sua_senha
  ```

* 🖥️ Configure seu servidor local PHP (XAMPP, WAMP) apontando para a pasta `backend`

* ✅ Certifique-se que o banco MySQL está rodando e configurado com o banco

### 2. Rodar o Frontend

* 📂 Acesse a pasta `frontend`

* 📦 Instale as dependências:

  ```bash
  npm install
  ```

* 🚀 Inicie o servidor de desenvolvimento:

  ```bash
  npm run dev
  ```

* 🌐 O frontend estará disponível em `http://localhost:<numero_da_porta>`

---

## Contato

✉️ Para dúvidas ou sugestões, entre em contato comigo:
**Email:** [rodriguesjuliaw23@gmail.com](mailto:rodriguesjuliaw23@gmail.com)

---

## Autores

* ✍️ UX Writer/UI - Camila Bonilha
* 👩‍💻 UX/UI & Desenvolvimento Full-stack - Julia Gomes
* 🎨 Designer - Samara Duarte

Quer que eu faça alguma personalização diferente?
