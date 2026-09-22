const adminHandlerMiddleware = (req, res, next) => {
    if(req.user.role !== "admin"){
        res.status(403)
        return next(new Error("Restricted!"))
    }
    
    next()
}

export default adminHandlerMiddleware