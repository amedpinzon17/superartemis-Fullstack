
import { getClientes,  deleteCliente, insertCliente, clientes, updateClientes } from "./API.js";

document.addEventListener("DOMContentLoaded", showClientes);
const carta = document.querySelector("#datosClientes")


async function showClientes(){
    const data = await getClientes();
    data.forEach((element) => {
        const {_id, constacto, titulo, ciudad, Pis, telefono} = element;
        carta.innerHTML += `
           <tr>
            <th>${_id}</th>
            <td>${constacto}</td>
            <td>${titulo}</td>
            <td>${ciudad}</td>
            <td>${Pis}</td>
            <td>${telefono}</td>
           <td><button class="btn btn-warning update" idEditar="${_id}" id="${_id}" data-bs-toggle="modal" data-bs-target="#exampleModal1">Editar</button>
            <button type="button" class="btn btn-danger delete" id="${_id}">Eliminar</button></td>
        </tr>
        `
    }) 
}

//! METODO INSERTAR

const insertar = document.querySelector('#registro');

insertar.addEventListener('submit', (e) => {
    insert(e);
});

const insert = (e) => {
       e.preventDefault();
    const constacto = document.querySelector('#constacto').value;
    const titulo = document.querySelector('#titulo').value;
    const ciudad = document.querySelector('#ciudad').value;
    const Pis = document.querySelector('#Pis').value;
    const telefono = document.querySelector('#telefono').value;

    const cliente = {
        constacto,
        titulo,
        ciudad,
        Pis,
        telefono
    }


    console.log(cliente);
    insertCliente(cliente);



 /*    console.log(cliente);
    if (validation(cliente)) {
        alert('todos los campos son obligatorios');
    }else {
        insertCliente(cliente); 
    } */
     
   
}



//! METODO ELIMINAR

carta.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        const id = e.target.getAttribute('id');
        borrar(id);
    }else if(e.target.classList.contains('update')){
        const id = e.target.getAttribute('id');
         getClient(id); 
    }
})

const borrar = (id) => {
    const confir = confirm("desea eliminarlo");
    if(confir){
        deleteCliente(id);
    }
}


//! METODO EDITAR
 

   


const getClient = async (id) =>{
    const dataos = await clientes(id);
    console.log(dataos);
    

    const {_id, constacto, titulo, ciudad, Pis, telefono} = dataos;

    const clientesUpdate = document.querySelector('#constactoUp');
    clientesUpdate.setAttribute('value', constacto);
    clientesUpdate.setAttribute('idCa', _id);

    const clientesUpdate2 = document.querySelector('#tituloUp');
    clientesUpdate2.setAttribute('value', titulo);

    const clientesUpdate3 = document.querySelector('#ciudadUp');
    clientesUpdate3.setAttribute('value', ciudad);

    const clientesUpdate4 = document.querySelector('#PisUp');
    clientesUpdate4.setAttribute('value', Pis);

    const clientesUpdate5 = document.querySelector('#telefonoUp');
    clientesUpdate5.setAttribute('value', telefono);
}



const sacarID= document.querySelector('#datosClientes')
sacarID.addEventListener('click', retornarID )
function retornarID (e){

     if (e.target.getAttribute('idEditar')) {
        const id = e.target.getAttribute('idEditar')
        console.log(id);


        const uopdateCliente = document.querySelector('#editar');
    uopdateCliente.addEventListener('submit', (e) => {
        e.preventDefault()
       const _id = document.querySelector('#constactoUp');
    // const id = parseInt(_id.getAttribute('idCa'));
    const constacto = document.querySelector('#constactoUp').value;
    const titulo = document.querySelector('#tituloUp').value;
    const ciudad = document.querySelector('#ciudadUp').value;
    const Pis = document.querySelector('#PisUp').value;
    const telefono = document.querySelector('#telefonoUp').value;

    const cliente = {
        constacto,
        titulo,
        ciudad,
        Pis,
        telefono
    }

    console.log(cliente, id);
    updateClientes(cliente, id);

    })

       
    }
    


}







