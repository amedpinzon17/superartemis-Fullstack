import Express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import ClientesRouter from "./routes/clientes.routes.js";
import cors from "cors";

const app = Express();
app.use(Express.json());

dotenv.config();

const corsOptions = {
  methods: ["GET" , "POST" , "PATCH" , "DELETE"]
}
app.use(cors(corsOptions));


app.use("/clientes", ClientesRouter);

const PORT = process.env.PORT;

conectarDB();

app.listen(PORT, () => {
  console.log(`Servidor rodando en puerto ${PORT}`);
});