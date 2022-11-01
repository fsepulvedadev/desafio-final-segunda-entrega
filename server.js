import express from "express";
import carrito from "./routes/Carrito.router.js";
import producto from "./routes/Producto.router.js";

const app = express();
const router = express.Router();

app.use(express.json());
app.use("/api", router);
app.use("/api/carritos", carrito);
app.use("/api/productos", producto);

app.listen(3000, () => {
  console.log("Server on port 3000");
});

/* 
const productosNuevos = [
  {
    nombre: "Samsung S21 Plus 128GB",
    precio: 15000,
    stock: 11,
    thumbnail: "www.samsung.com.ar/s22",
  },
  {
    nombre: "Samsung S21 Plus 128GB",
    precio: 15000,
    stock: 11,
    thumbnail: "www.samsung.com.ar/s22",
  },
  {
    nombre: "Samsung S21 Plus 128GB",
    precio: 15000,
    stock: 11,
    thumbnail: "www.samsung.com.ar/s22",
  },
]; */
/* 
const productoNuevo = {
  nombre: "Samsung S43 Plus 1298GB",
  precio: 150000,
  stock: 11,
  foto: "www.samsung.com.ar/s22",
  codigo: "asdfajkf151f5fs",
  desc: "El ultimo celular de samsung",
};
 */

/* const CRUD = async () => {
  try {
     await addDoc(collection(db, "productos"), {
      nombre: "Samsung S21 Plus 128GB",
      precio: 15000,
      stock: 11,
      thumbnail: "www.samsung.com.ar/s22",
    });
    console.log("Producto agregado");
     await carritosFB.agregarProductoCarrito(
      "QFa01WJ7OqaejtP9yTk7",
      productoNuevo
    );
      const nuevoCarrito = await carritosFB.agregarCarrito({
      id: 2,
      productos: productosNuevos,
    });
    console.log(nuevoCarrito);
    
    const dato = await contenedorFB.listar("BqyfIUlUrkz5ksCwuWDm");
    console.log(dato);
    const carrito = await carritosFB.listar("QFa01WJ7OqaejtP9yTk7");
    console.log(carrito.productos);
     const asd = await carritosFB.borrarProductoDeCarrito(
      "l03lyrOD2cRRo2ZDvfbo",
      0
    );
    console.log(asd);
    productosFB.agregarProductos(productoNuevo);
    productosFB.editarProducto("bNfPWsMgMmC9D2SpxJ84", {
      nombre: "Iphone 14 Plus 1298GB",
      precio: 15000,
      stock: 32,
      foto: "www.apple.com.ar/s22",
      codigo: "asdfaj2351f5fs",
      desc: "El ultimo celular de APPLE",
    });
    productosFB.borrarProducto("bNfPWsMgMmC9D2SpxJ84");
  } catch (err) {
    console.log(err);
  }
};

CRUD();
 */
