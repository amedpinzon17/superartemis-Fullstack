import express from "express";

const router = express.Router();
 
import { actualizarClientes, agregarClientes, borrarCliente, obtenerClientes, obtenerCliente } from "../controllers/clientes.controllers.js";

router.get("/all", obtenerClientes);
router.get("/all/:id", obtenerCliente);
router.post("/add", agregarClientes);
router.delete("/remove/:id", borrarCliente);
router.patch("/upd/:id", actualizarClientes);



export default router;