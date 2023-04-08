import { Router } from "express";
import ProductManager from "../productManager.js";
import CartManager from "../cartManager/cartManager.js";


const viewsRouter = Router();
const productManager = new ProductManager();
viewsRouter.get("/", async (req, res) => {
  const products = await productManager.getProducts();
  res.render("home",{products});
});

viewsRouter.get("/realTimeProducts", async (req, res) => {
  const products = await productManager.getProducts();
  res.render("realTimeProducts", { products });
});


export default viewsRouter;

// import { Router, json } from "express";
// import productManager from "../productManager.js";

// const item = new productManager();

// const viewsRouter = Router();

// viewsRouter.get("/", async(req,res)=>{
//     const prods =await item.getProducts();
//     console.log(prods);
//     res.render("home",{prods});
// })

// viewsRouter.get('/realTimeProducts', (req,res)=>{
//     res.render('realTimeProducts');
// })

// export default viewsRouter;