import mongoose from "mongoose";


const schema = new mongoose.Schema({
    name: {type : String , required : true  },
    desc : {type : String , required : true }
}) 


schema.set("timestamps" , true);
const Crudmodel = mongoose.model("crud" , schema);


export default Crudmodel;