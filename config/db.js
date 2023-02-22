import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        mongoose.set("strictQuery", false);

        const db = await mongoose.connect(process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           
        });

        const url = `${db.connection.host}:${db.connection.port}`;
        console.log(`MongoDB conectada en ${url}`);

    } catch (error) {
        console.log(error.message);
    }
}

export default conectarDB