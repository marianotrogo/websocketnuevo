import { Router } from "express";
import productManager from "../productManager.js";

const prodManager = new productManager("../../productos.json");
let products = [];
const viewsRouter = Router();
viewsRouter.get("/", async (req, res) => {
  const products = await prodManager.getProducts();
  res.render("home", {products});
});

viewsRouter.get("/realTimeProducts", async (req, res) => {
  const products = await prodManager.getProducts();
  res.render('realTimeProducts', {products: products});
});


export default viewsRouter;
