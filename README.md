# Sistema Escolar

API REST desenvolvida com **Node.js**, **Express**, **Prisma ORM** e **PostgreSQL** para gerenciamento de **turmas** e **atividades escolares**.

---

## Tecnologias utilizadas

- Node.js
- Express
- Prisma ORM
- PostgreSQL
- dotenv

---

## Estrutura do projeto

```text
sistema-escolar/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── controllers/
│   ├── database/
│   ├── routes/
│   └── server.js
│
├── .env
├── package.json
├── package-lock.json
└── README.md
```

---

## Entidades

### Turma

Representa uma turma da escola.

| Campo | Tipo |
| ------ | ---- |
| id | Integer |
| nome | String |
| serie | String |

Uma turma pode possuir várias atividades.

### Atividade

Representa uma atividade vinculada a uma turma.

| Campo | Tipo |
| ------ | ---- |
| id | Integer |
| titulo | String |
| descricao | String |
| turmaId | Integer |

Cada atividade pertence a uma única turma.

---

## Relacionamento

```text
Turma (1)
   │
   └──────< Atividade (N)
```

---

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto.

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/sistema_escolar"
PORT=3000
```

---

## Instalação e execução

### 1. Clone o repositório

```bash
git clone https://github.com/Vanderson2301/sistema-escolar.git
```

### 2. Acesse a pasta do projeto

```bash
cd sistema-escolar
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure o arquivo `.env`

Crie o arquivo `.env` conforme o exemplo acima.

### 5. Execute as migrações do banco

```bash
npx prisma migrate dev
```

### 6. Gere o Prisma Client (caso necessário)

```bash
npx prisma generate
```

### 7. Inicie a aplicação

```bash
npm start
```

Ou, caso utilize um script de desenvolvimento:

```bash
npm run dev
```

A API estará disponível em:

```
http://localhost:3000
```

---

# Endpoints da API

## Turmas

### Listar todas as turmas

```
GET /turmas
```

### Buscar uma turma por ID

```
GET /turmas/:id
```

### Criar uma turma

```
POST /turmas
```

Exemplo de requisição:

```json
{
  "nome": "Turma A",
  "serie": "1º Ano"
}
```

### Atualizar uma turma

```
PUT /turmas/:id
```

### Excluir uma turma

```
DELETE /turmas/:id
```

---

## Atividades

### Listar todas as atividades

```
GET /atividades
```

### Criar uma atividade

```
POST /atividades
```

Exemplo de requisição:

```json
{
  "titulo": "Trabalho de Matemática",
  "descricao": "Capítulo 5",
  "turmaId": 1
}
```

### Atualizar uma atividade

```
PUT /atividades/:id
```

### Excluir uma atividade

```
DELETE /atividades/:id
```

---

## Banco de dados

O projeto utiliza **PostgreSQL** como banco de dados e **Prisma ORM** para gerenciamento das entidades e migrações.

As migrações estão localizadas em:

```
prisma/migrations
```

O modelo do banco de dados encontra-se em:

```
prisma/schema.prisma
```

---

## Autor

Desenvolvido por **Vanderson**.