require("dotenv").config();
const express = require("express");
const turmaRoutes = require("./routes/turma.routes");
const atividadeRoutes = require("./routes/atividade.routes");

const app = express();

app.use(express.json());

// Importação das rotas
app.use(turmaRoutes);
app.use(atividadeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}`);
});
