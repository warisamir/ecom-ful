import express from 'express';
import { singleupload } from '../middlewares/multer.js';
import { deleteProduct, getAdminProducts, getAllcategories, getlatestProducts, getsingleProduct, newProduct, updateProduct } from '../Controllers/Product.js';
import { adminOnly } from '../middlewares/Auth.js';
const app = express.Router();
app.post("/new", adminOnly, singleupload, newProduct);
app.get("/latest", getlatestProducts);
app.get("/categories", getAllcategories);
app.get("/admin-product", getAdminProducts);
app.route(":/id")
    .get(getsingleProduct)
    .put(singleupload, updateProduct)
    .delete(deleteProduct);
export default app;
