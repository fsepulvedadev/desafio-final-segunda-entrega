import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  deleteField,
  setDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase.js";
import { ContenedorFirebase } from "../../contenedores/ContenedorFirebase.js";

export default class CarritosDaoFB extends ContenedorFirebase {
  async agregarCarrito() {
    try {
      const agregado = await addDoc(collection(db, "carritos"), {
        id: Date.now(),
        timestampCarrito: Date.now(),
        productos: [],
      });
      return agregado;
    } catch (err) {
      console.log(err);
    }
  }

  async agregarProductoCarrito(idCarrito, DataNuevoProducto) {
    let target = await this.listar(idCarrito);
    let nuevoProducto = {
      id: Date.now(),
      timestamp: Date.now(),
      nombre: DataNuevoProducto.nombre,
      desc: DataNuevoProducto.desc,
      codigo: DataNuevoProducto.codigo,
      foto: DataNuevoProducto.foto,
      precio: DataNuevoProducto.precio,
      stock: DataNuevoProducto.stock,
    };
    target.productos.push(nuevoProducto);

    let docRef = doc(db, "carritos", idCarrito);

    updateDoc(docRef, target)
      .then((docRef) => {
        console.log("Archivo modificado");
        return nuevoProducto;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async borrarCarrito(id) {
    deleteDoc(doc(db, "carritos", id))
      .then(() => {
        return { msg: `Carrito con id ${id} eliminado` };
      })
      .catch((err) => console.log(err));
  }

  async borrarProductoDeCarrito(idCarrito, idProducto) {
    let targetCarrito = await this.listar(idCarrito);

    let indexProducto = targetCarrito.productos
      .map((x) => x.id)
      .indexOf(parseInt(idProducto));

    if (indexProducto === -1) {
      return false;
    } else {
      let borrado = targetCarrito.productos.splice(indexProducto, 1);

      const data = {
        productos: deleteField(),
      };

      this.agregarProductoCarrito(doc(db, "carritos", idCarrito), data);

      setDoc(doc(db, "carritos", idCarrito), targetCarrito, {
        merge: true,
      });

      return borrado;
    }
  }
}
