import Clientes from "../models/clientes.js";

const obtenerClientes = async (req, res) => {
    const cliente = await Clientes.find();

    res.json(cliente);

}

const obtenerCliente = async (req, res) => {
    try{
    const clientes = await Clientes.findOne({_id:req.params.id});
    res.json(clientes);
    }catch(error){
        console.log(`${error.message}`);
    }
}


const agregarClientes = async (req, res) => {
    const cliientes = new Clientes(req.body);
    try{
        const nuevoCliente = await cliientes.save();
        res.json(nuevoCliente);
    }catch(error){
        console.log(error.message);
    }

}

const borrarCliente = async (req,res) => {
    try{
        await Clientes.deleteOne({_id:req.params.id});
        res.status(204).send
    }catch(error){
        res.status(404)
        res.send({errror: "no existe"});
    }
}


const actualizarClientes = async (req, res) => {
    try{
        const clienteAc = await Clientes.findOne({_id:req.params.id});

    /*      if(req.body.compañia){
            clienteAc.compañia = req.body.compañia;
        } */
 

         if(req.body.constacto){
            clienteAc.constacto = req.body.constacto;
        }

         if(req.body.titulo){
            clienteAc.titulo = req.body.titulo;
        }

  /*         if(req.body.direccion){
            clienteAc.direccion = req.body.direccion;
        }  */

         if(req.body.ciudad){
            clienteAc.ciudad = req.body.ciudad;
        }

    /*       if(req.body.CodigoPostal){
            clienteAc.CodigoPostal = req.body.CodigoPostal;
        } */
 
         if(req.body.Pis){
            clienteAc.Pis = req.body.Pis;
        }

         if(req.body.telefono){
            clienteAc.telefono = req.body.telefono;
        }
 
       /*   if(req.body.Fax){
            clienteAc.Fax = req.body.Fax;
        }  */


        await clienteAc.save();
        res.send(clienteAc);

    }catch(error){
        console.log(error);
        res.status(404)
        res.send({errror: "no existe"});
    }
}










export {obtenerClientes, agregarClientes, borrarCliente, actualizarClientes, obtenerCliente};