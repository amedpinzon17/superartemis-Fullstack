const url = "http://localhost:7000/clientes";

export const getClientes = async () => {
    try{
        const datos = await fetch(`${url}/all`);
        const result = await datos.json();
        return result;
    }catch(error){
        console.log(error);
    }
}

export const clientes = async (id) => {
    try{
        const data = await fetch(`${url}/all/${id}`);
        const  result = await data.json();
        return result;
    }catch(error){
        console.log(error);
    }
} 

export const insertCliente = async (client) => {
    try{
       await fetch(`${url}/add`,{
            method:'POST',
            body:JSON.stringify(client),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "./clientes.html"
    }catch(error) {
        console.log(error); 
    }
}

export const updateClientes = async (clienteUo, id) => {
    try{
        await fetch(`${url}/upd/${id}`, {
            method: 'PATCH',
            body:JSON.stringify(clienteUo),
            headers: {
                'Content-Type':'application/json'
            }
        })
       // window.location.href = "clientes.html"
    }catch(error){
        console.log(error);
}

}


export const deleteCliente = async (id) => {
    try{
        await fetch(`${url}/upd/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            }
        });
        window.location.href = 'clientes.html'
    }catch(error){
        console.log(error);
    }
}