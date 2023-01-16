import http from "http"
import mongoose from "mongoose"


const server=http.createServer((req,res)=>{

    if(req.url=="/"){
        res.write("<h1>Home Page</h1>")
    }else if(req.url=="/about"){
        res.write("<h1>About Page</h1>")
    }
    else if(req.url=="/contact"){
        res.write("<h1>Contact Page</h1>")
    }else{
        res.write("<h1>Not Found</h1>")
    }
    res.end()

})



const CONNECTION_URL="mongodb+srv://hasannuruzade:hasan123_@cluster0.gzcahit.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery', false);
mongoose.connect(CONNECTION_URL).then(()=>{
    console.log("Connection DB");
})

server.listen(3000,()=>{
    console.log("Server loading");
})