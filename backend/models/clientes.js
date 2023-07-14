import mongoose from "mongoose";

const clientestSchema = mongoose.Schema({



    
    constacto: {
        type: String,
        required: true,
        trim: true
    },

    
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    
    ciudad: {
        type: String,
        required: true,
        trim: true
    },

  
    
    Pis: {
        type: String,
        required: true,
        trim: true
    },

    
    telefono: {
        type: Number,
        required: true,
        trim: true
    },
    

},

{
    timestamps: true,
}
);

const Clientes = mongoose.model("clientes", clientestSchema , "clientes");


export default Clientes;