import express from "express";
import CarritosDaoFB from "../daos/carritos/CarritosDaoFirebase.js";

const carrito = new CarritosDaoFB("carritos");
console.log(carrito);
const router = express.Router();

router.post("/", async (req, res) => {
  const newCarrito = await carrito.agregarCarrito();
  res.send(newCarrito);
});

router.post("/:id/productos/", (req, res) => {
  const agregado = carrito.agregarProductoCarrito(req.params.id, req.body);
  res.send(agregado);
});

router.delete("/:id", async (req, res) => {
  const carritoBorrado = await carrito.borrarCarrito(req.params.id);
  res.send(JSON.stringify(carritoBorrado));
});

router.delete("/:id/productos/:idProd", async (req, res) => {
  const productoBorrado = await carrito.borrarProductoDeCarrito(
    req.params.id,
    req.params.idProd
  );
  res.send(productoBorrado);
});

router.get("/", async (req, res) => {
  const listaCarritos = await carrito.listarTodos();
  res.send(listaCarritos);
});

export default router;
