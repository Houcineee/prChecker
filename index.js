const express = require("express")

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.post("/" , (req, res)=>{
  console.log(req.body)
}) ;
const PORT = 8080
app.listen(PORT , ()=>{
  console.log(`server is listening on localhost:${PORT}`)
})
