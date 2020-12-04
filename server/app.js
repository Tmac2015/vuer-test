const express =  require("express");
const app = express();
// const router = require("./src/router")
app.get("/",function (req,res) {
    console.log(req)
    res.json({
        status:200
    } )
})
// app.use("/",router)
app.listen(3000);