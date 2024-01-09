import mongoose from "mongoose";
export const connectDB = async () => {
    mongoose.connect("mongodb+srv://warisamir1918:waris1918@ecom.plaqzfh.mongodb.net/", {
        dbName: "Ecommerce_24"
    }).then((c) => console.log(`database connected to ${c.connection.host}`))
        .catch((e) => console.log(e));
};
