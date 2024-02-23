import mongoose from "mongoose";

const material={
    material_name:{
        type: String,
        required: true
    },
    material_brand:{
        type: String,
        required: true
    },
    material_stock:{
        type:Number,
        required:true
    },
    material_use:{
        type:String,
        required:true
    },
}

 const Material=mongoose.model("Material",material)

export default Material
