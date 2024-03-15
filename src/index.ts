console.clear();
import express from "express";
import { config } from "./config/config";
import cors from "cors";
// import authRouter from "./routes/auth";
// import eventsRouter from "./routes/events";
// import { dbConnection } from "./database/config";

// Instancia de nuestro Aplicacion express
const app = express();
const PORT = config.port;

// BD
// dbConnection()
//   .then(() => console.log("Conectado a mongoose :)"))
//   .catch(() => console.log("Error en la conexion :("));

// CORS
app.use(cors());

// Directorio publico
// app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).json({ message: "Conectado al servidor" });
});

// Rutas
// app.use("/api/auth", authRouter);
// app.use("/api/events", eventsRouter);

// Escuchar peticiones
app.listen(PORT, () => console.log(`Conectado desde el puerto ${PORT}`));
