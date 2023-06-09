import express from "express";
import CadastroController from "../controllers/cadastroController.js";

const router = express.Router();

router.get("/animais", CadastroController.listarAnimal);
router.post("/animais", CadastroController.cadastrarAnimal);
router.put("/animais/:id", CadastroController.atualizarAnimal);
router.delete("/animais/:id", CadastroController.deletarAnimal);

export default router;
