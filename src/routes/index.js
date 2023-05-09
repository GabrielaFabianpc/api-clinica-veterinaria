import express from "express";
import cadastro from "./cadastroRoutes.js"; //importamos do routes.

const routes = (app) => {
  app.use(express.json(), cadastro);
};

export default routes;
