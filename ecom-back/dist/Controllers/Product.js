import { TryCatch } from "../middlewares/Error.js";
import { Product } from "../models/Product.js";
import ErrorHandler from "../utils/utility-class.js";
import { rm } from "fs";
export const newProduct = TryCatch(async (req, res, next) => {
    const { name, price, stock, category } = req.body;
    const photo = req.file;
    if (!photo)
        return next(new ErrorHandler("Please Add photo", 400));
    if (!name || !price || !stock || !category) {
        rm(photo.path, () => {
            console.log("deleted");
        });
    }
    await Product.create({
        name,
        price,
        stock,
        category: category.toLowerCase(),
        photo: photo?.path,
    });
    return res.status(201).json({
        success: true,
        message: "Product Created Successfully",
    });
});
export const getlatestProducts = TryCatch(async (req, res, next) => {
    const products = await Product.find({}).sort({ createdAt: -1 }).limit(5);
    return res.status(200).json({
        success: true,
        products,
    });
});
export const getAllcategories = TryCatch(async (req, res, next) => {
    const categories = await Product.find({}).distinct("category");
    return res.status(201).json({
        success: true,
        categories,
    });
});
export const getAdminProducts = TryCatch(async (req, res, next) => {
    const products = await Product.find({});
    return res.status(201).json({
        success: true,
        products,
    });
});
export const getsingleProduct = TryCatch(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    return res.status(200).json({
        success: true,
        product,
    });
});
export const updateProduct = TryCatch(async (req, res, next) => {
    const { name, price, stock, category } = req.body;
    const { id } = req.params;
    const photo = req.file;
    const product = await Product.findById(id);
    if (!photo)
        return next(new ErrorHandler("Please Add photo", 400));
    if (!name || !price || !stock || !category) {
        rm(photo.path, () => {
            console.log("deleted");
        });
    }
    await Product.create({
        name,
        price,
        stock,
        category: category.toLowerCase(),
        photo: photo?.path,
        _id: id
    });
    return res.status(201).json({
        success: true,
        message: "Product Created Successfully",
    });
});
