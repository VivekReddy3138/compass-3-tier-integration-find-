const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/employees",async(req,res)=>{
  
    let employeesArr = await Employee.find().limit(20).skip(300);
    
   res.json(employeesArr);
});

app.listen(1234,()=>{
    console.log("Listening to port 1234");
})

let employeeSchema = new mongoose.Schema({

id:Number,
firstName:String,
lastName:String,
email:String,
gender:String,
age:Number,
department:String,
profilePic:String,
salary:Number,
country:String,
});

let Employee = new mongoose.model("employee",employeeSchema,"employess");


let connectToMDB = async ()=> {

    try{
        mongoose.connect("mongodb+srv://vivekaleti:vivekaleti@vivek.wwjla.mongodb.net/tata?retryWrites=true&w=majority&appName=vivek")
       
        console.log("successfully connected to MDB");
    
    
    }catch(err){
         console.log("Unable to Connect to MDB");
    }

};

connectToMDB();
