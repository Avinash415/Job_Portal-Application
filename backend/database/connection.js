import mongoose from "mongoose";

export const connection = () =>{
    mongoose.connect(process.env.MONGODB_URL, {
        dbName: "JOB_PORTAL_WEB-APPLICATION"
    }).then(()=>{
        console.log("Database connected successfully");
    }).catch(err=>{
        console.log(`Error occur during database connection! ${err}`);
    })
}