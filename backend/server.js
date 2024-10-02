
import app from "../backend/app.js";
import cloudinary from "cloudinary";

const PORT=process.env.PORT;

 cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})