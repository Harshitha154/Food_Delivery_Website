import mongoose from "mongoose";
export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://Harshitha:Harshitha@cluster0.fwsaoze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>
    console.log("db conneted"));
}
