const express =  require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('./models/Users')
const app = express()
app.use(cors())
app.use(express.json())
const PORT = 4000

mongoose.connect("mongodb://localhost/crud")

app.get('/',(req,res)=>{
    userModel.find({})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

app.get("/getUser/:id",(req,res)=>{
    const id = req.params.id
    userModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

app.put("/updateUser/:id",(req,res)=>{
    const id = req.params.id
    userModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

app.post("/createUser",(req,res)=>{
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.delete("/deleteUser/:id",(req,res)=>{
    const id = req.params.id
    userModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => console.log(err))
})

app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}` );
    
})