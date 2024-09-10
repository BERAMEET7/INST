const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors");


const app = express();
const PORT = 3000;

app.listen(PORT,()=>{
    console.log("Server Listining at ",PORT);
})