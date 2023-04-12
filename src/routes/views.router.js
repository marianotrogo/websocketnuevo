import { Router } from "express";
import productManager from "../productManager.js";


const prodManager = new productManager('./src/productos.json');
let products = [];
const viewsRouter = Router();

viewsRouter.get("/", async(req,res)=>{
    const products =await prodManager.getProducts();
    res.render("home",{products});
})

viewsRouter.get('/realTimeProducts', async (req,res)=>{
    let products = await prodManager.getProducts();
    console.log(products);
    res.render('realTimeProducts',{products: products});
})

viewsRouter.get("/chat", (req,res)=>{
    res.send("chat")
})

export default viewsRouter;
// import { Router } from "express";
// import productManager from "../productManager.js";

// const prodManager = new productManager("../../productos.json");
// let products = [];
// const viewsRouter = Router();
// viewsRouter.get("/", async (req, res) => {
//   const products = await prodManager.getProducts();
//   res.render("home", {products});
// });

// viewsRouter.get("/realTimeProducts", async (req, res) => {
//   const products = await prodManager.getProducts();
//   res.render('realTimeProducts', {products: products});
// });


// export default viewsRouter;
