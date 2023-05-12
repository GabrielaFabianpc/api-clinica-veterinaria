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
  static listarAnimal = async (req, res) => {
    try {
      const listarAnimais = await cadastroAnimal.find();
      res.status(200).json(listarAnimais);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Não foi possível listar os animais cadastrados!" });
    }
  };
  static atualizarAnimal = async (req, res) => {
    const id = await req.params.id;
    const { nomeDono, nomeAnimal, tipoAnimal, racaAnimal, idadeAnimal } =
      req.body;
    const animalBody = {
      nomeDono,
      nomeAnimal,
      tipoAnimal,
      racaAnimal,
      idadeAnimal,
    };
    try {
      const animalAtualizado = await cadastroAnimal.updateOne(
        { _id: id },
        animalBody
      );
      res.status(200).json({
        message: "Cadastro do animal atualizado com sucesso!",
      });
    } catch (error) {
      res
        .status(500)
        .send({ message: "Não foi possível atualizar cadastro do animal!" });
    }
  };
  static deletarAnimal = async (req, res) => {
    try {
      const id = req.params.id;
      const deletandoAnimal = await cadastroAnimal.deleteOne({ _id: id });
      if (deletandoAnimal.deletedCount === 0) {
        res.status(500).send({ message: "Animal ja deletado do sistema!" });
      }
      res
        .status(200)
        .json({ message: "Cadastro do animal deletado com sucesso!" });
    } catch (error) {
      res.status(500).send({
        message: "Não foi possível deletar o cadastro do animal no sistema!",
      });
    }
  };
}

export default CadastroController;
