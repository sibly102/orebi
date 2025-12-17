import mongoose from 'mongoose';
const dbConnect = async() =>{
    try {
        mongoose.connection.on('connected', () =>{
            console.log("db is connected");
        })
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
      console.log("Mongodb Connection Error", error);
    }
}
export default dbConnect;