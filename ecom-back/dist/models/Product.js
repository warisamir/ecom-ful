import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter you Name"],
    },
    photo: {
        type: String,
        required: [true, "Please add Photo"],
    }, price: {
        type: Number,
        required: [true, "Please enter price"]
    },
    stock: {
        type: Number,
        required: [true, "Please Enter Stock"],
    },
    category: {
        type: String,
        required: [true, "Please enter Category"],
        trim: true,
    },
}, {
    timestamps: true,
});
export const Product = mongoose.model("Product", schema);
