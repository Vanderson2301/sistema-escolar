const prisma = require("../database/prisma");

// CRUD de Atividades
module.exports = {
  async create(req, res) {
    try {
      const { titulo, descricao, dataEntrega, turmaId } = req.body;

      const novaAtividade = await prisma.atividade.create({
        data: {
          titulo,
          descricao,
          dataEntrega: new Date(dataEntrega),
          turmaId: Number(turmaId),
        },
      });

      return res.status(201).json(novaAtividade);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar atividade." });
    }
  },

  async listByTurma(req, res) {
    try {
      const { turmaId } = req.params;

      const atividades = await prisma.atividade.findMany({
        where: {
          turmaId: Number(turmaId),
        },
      });

      return res.json(atividades);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar atividades." });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { titulo, descricao, dataEntrega, turmaId } = req.body;

      const atividadeAtualizada = await prisma.atividade.update({
        where: {
          id: Number(id),
        },
        data: {
          titulo,
          descricao,
          dataEntrega: new Date(dataEntrega),
          turmaId: Number(turmaId),
        },
      });

      return res.json(atividadeAtualizada);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar atividade." });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      await prisma.atividade.delete({
        where: {
          id: Number(id),
        },
      });

      return res.json({
        mensagem: "Atividade excluída com sucesso.",
      });
    } catch (error) {
      return res.status(500).json({ error: "Erro ao excluir atividade." });
    }
  },
};
