const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
    car_brand: { 
        type: String,
        minLength: 3,
        maxLength: 20, 
        required: true,
        trim: true
    },
    car_color: { 
        type: String, 
        required: true
    },
    car_cost: { 
        type: Number, 
        min:[15000, 'Must be at least 15000, got {VALUE}'], 
        max:40000
    }
})
module.exports = mongoose.model("Car", carSchema)