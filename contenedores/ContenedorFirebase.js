import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase.js";

export class ContenedorFirebase {
  constructor(nombreCol) {
    this.nombreCol = nombreCol;
  }

  async listar(id) {
    const objs = await this.listarTodos();
    const target = objs.find((o) => o.id === id);
    return target;
  }

  async listarTodos() {
    try {
      const objs = await getDocs(collection(db, this.nombreCol));
      const respuesta = objs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      return respuesta;
    } catch (err) {
      console.log(err);
    }
  }
}
