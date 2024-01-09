export const errorMiddleWare = (err, req, res, next) => {
    // shorthand just like p=p+1=> p+=1;
    err.message || (err.message = "Internal Server error");
    err.statusCode || (err.statusCode = 500);
    return res.status(400).json({
        sucess: false,
        message: err.message
    });
};
export const TryCatch = () => () => {
};
