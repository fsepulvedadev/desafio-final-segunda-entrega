import { ContenedorFirebase } from "../../contenedores/ContenedorFirebase.js";
import { db } from "../../config/firebase.js";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export class ProductosDaoFirebase extends ContenedorFirebase {
  async agregarProductos(producto) {
    let nuevoProducto = {
      id: producto.id || Date.now(),
      timestamp: Date.now(),
      nombre: producto.nombre,
      desc: producto.desc,
      codigo: producto.codigo,
      foto: producto.foto,
      precio: producto.precio,
      stock: producto.stock,
    };

    addDoc(collection(db, "productos"), nuevoProducto)
      .then((data) => {
        console.log("Producto agregado");
        return nuevoProducto;
      })
      .catch((err) => console.log(err));
  }

  async editarProducto(id, newProducto) {
    const target = await this.listar(id);

    target.codigo = newProducto.codigo;
    target.desc = newProducto.desc;
    target.foto = newProducto.foto;
    target.nombre = newProducto.nombre;
    target.precio = newProducto.precio;
    target.stock = newProducto.stock;

    updateDoc(doc(db, "productos", id), target)
      .then((data) => console.log("Producto actualizado"))
      .catch((err) => console.log(err));
  }

  async borrarProducto(id) {
    deleteDoc(doc(db, "productos", id))
      .then((data) => console.log("El producto ha sido eliminado."))
      .catch((err) => console.log(err));
  }
}
