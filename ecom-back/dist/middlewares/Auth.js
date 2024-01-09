import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "./Error.js";
export const adminOnly = TryCatch(async (req, res, next) => {
    const { Id } = req.query;
    if (!Id) {
        return next(new ErrorHandler("user not login", 401));
    }
    const user = await User.findById(Id);
    if (!user) {
        return next(new ErrorHandler("fake user id", 401));
    }
    if (user.role !== "admin") {
        return next(new ErrorHandler("User not admin", 401));
    }
    next();
});
