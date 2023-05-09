import mongoose from "mongoose";
import cadastroAnimal from "../models/cadastroAnimal.js";

class CadastroController {
  static cadastrarAnimal = async (req, res) => {
    try {
      const { nomeDono, nomeAnimal, tipoAnimal, racaAnimal, idadeAnimal } =
        req.body;
      const animalCadastrado = await cadastroAnimal.create({
        nomeDono,
        nomeAnimal,
        tipoAnimal,
        racaAnimal,
        idadeAnimal,
      });
      res
        .status(200)
        .json({ message: "Animal cadastrado com sucesso", animalCadastrado });
    } catch (error) {
      res.status(500).send({ message: "Não foi possível cadastrar o animal!" });
    }
  };
}

export default CadastroController;
