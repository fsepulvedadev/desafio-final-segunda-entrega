import express from "express";
import productoFB from "../daos/productos/ProductosDaoFirebase.js";

const producto = new productoFB("productos");
const router = express.Router();

router.post("/", async (req, res) => {
  const newProducto = await producto.agregarProductos(req.body);
  res.send(newProducto);
});

router.put("/:id", (req, res) => {
  const editado = producto.editarProducto(req.params.id, req.body);
  res.send(editado);
});

router.delete("/:id", async (req, res) => {
  const productoBorrado = await producto.borrarProducto(req.params.id);
  res.send(productoBorrado);
});

router.get("/", async (req, res) => {
  const listaProductos = await producto.listarTodos();
  res.send(listaProductos);
});

export default router;
