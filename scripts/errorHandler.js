class AppError extends Error {
    constructor(message, status){
        super();
        this.message = message;
        this.status = status;
    }
}
//Async Utility
const wrapAsync=(fn)=>{
    return function (req, res, next){
        fn(req, res, next).catch(e => next(e))
    }
}
//Handle Mongo error 
const handleMongoError = (err) => {
  if (err.name === "CastError") {
    return new AppError("Invalid ID format", 400);
  }
  if (err.name === "ValidationError") {
    return new AppError(err.message, 400);
  }
  return err;
};

//Global error middleware
const globalErrorHandler = (err, req, res, next)=>{
    err = handleMongoError(err);
    
    const {status = 500} = err;
    const {message = "something went wrong"}= err;
    res.status(status).send(message);
}

module.exports = {AppError, wrapAsync, globalErrorHandler};