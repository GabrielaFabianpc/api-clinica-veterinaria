import mongoose from "mongoose";

const cadastroSchema = new mongoose.Schema({
  //amostra do que esperamos receber quando vai cadastar, atualizar e etc.
  id: { type: String, required: true },
  nomeDono: { type: String, required: true },
  nomeAnimal: { type: String, required: true },
  tipoAnimal: { type: String, reuqired: true },
  racaAnimal: { type: String, required: true },
  idadeAnimal: { type: Number, required: true },
});

const cadastro = mongoose.model("cadastro", cadastroSchema); //vamos ter uma coleçao de cadastro no banco, seguindo o modelo do schema
export default cadastro;
