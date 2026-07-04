# API de Gestão Escolar (Turmas & Atividades)

Esta é uma API RESTful desenvolvida em **Node.js** utilizando **Express** e **Prisma ORM** integrado ao banco de dados **PostgreSQL**. O sistema permite o gerenciamento completo de turmas escolares e a atribuição de atividades para cada uma delas.

---

## Entidades do Sistema

### 1. Turma (`Turma`)
Representa um grupo de alunos agrupados por ano/período.
* `id` (Int, Autoincrement) - Identificador único.
* `nome` (String) - Nome descritivo da turma (Ex: *7º Ano A*).
* `turno` (String) - Período das aulas (Ex: *Vespertino*).

### 2. Atividade (`Atividade`)
Representa uma tarefa ou avaliação associada obrigatoriamente a uma turma.
* `id` (Int, Autoincrement) - Identificador único.
* `titulo` (String) - Nome da atividade.
* `descricao` (String) - Detalhes do que deve ser feito.
* `dataEntrega` (DateTime) - Prazo final de envio.
* `turmaId` (Int) - Chave estrangeira que conecta a atividade à sua respectiva turma.

---

## Endpoints Principais

### Turmas
* **`POST /turmas`** - Cria uma nova turma.
* **`GET /turmas`** - Lista todas as turmas cadastradas (incluindo suas respectivas atividades).
* **`PUT /turmas/:id`** - Atualiza os dados de uma turma existente.
* **`DELETE /turmas/:id`** - Remove uma turma do banco de dados.

### Atividades
* **`POST /atividades`** - Cria uma atividade vinculada a uma turma através do `turmaId`.
* **`GET /turmas/:turmaId/atividades`** - Lista todas as atividades específicas de uma determinada turma.

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto baseado no exemplo abaixo:

```env
PORT=3000
DATABASE_URL="postgresql://postgres:123456@localhost:5432/escola"