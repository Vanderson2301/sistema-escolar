const prisma = require("../database/prisma");

//CRUD de Turma
module.exports = {
  async create(req, res) {
    try {
      const { nome, turno } = req.body;
      const novaTurma = await prisma.turma.create({
        data: { nome, turno },
      });
      return res.status(201).json(novaTurma);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar turma." });
    }
  },

  async list(req, res) {
    try {
      const turmas = await prisma.turma.findMany({
        include: { atividades: true }, // Traz as atividades vinculadas
      });
      return res.json(turmas);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar turmas." });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, turno } = req.body;
      const turmaAtualizada = await prisma.turma.update({
        where: { id: Number(id) },
        data: { nome, turno },
      });
      return res.json(turmaAtualizada);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar turma." });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      await prisma.turma.delete({
        where: { id: Number(id) },
      });
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Erro ao deletar turma." });
    }
  },
};
