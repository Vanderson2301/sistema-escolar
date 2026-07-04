const { Router } = require("express");
const turmaController = require("../controllers/turmaController");

const router = Router();

router.post("/turmas", turmaController.create);
router.get("/turmas", turmaController.list);
router.put("/turmas/:id", turmaController.update);
router.delete("/turmas/:id", turmaController.delete);

module.exports = router;
