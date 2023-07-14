import mongoose from "mongoose";


const conectarDB = async () => {
    try{
        const connectioDB = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const url = `CONECTODA A MONGODB EN SERVER ${connectioDB.connection.host} EN PUERTO ${connectioDB.connection.port}`;
        console.log(url); 
    }catch(error){
        console.log(`${error.message}`);
        process.exit(1);
    }
}

export default conectarDB;