const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://fsepulveda:37758303@cluster0.vcyoipx.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw new Error(`Error de conexion a la base de datos ${err}`);
    console.log("Base de datos conectada.");
  }
);
