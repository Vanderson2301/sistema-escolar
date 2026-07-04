const { Router } = require("express");
const atividadeController = require("../controllers/atividadeController");

const router = Router();

router.post("/atividades", atividadeController.create);
router.get("/turmas/:turmaId/atividades", atividadeController.listByTurma);

module.exports = router;
