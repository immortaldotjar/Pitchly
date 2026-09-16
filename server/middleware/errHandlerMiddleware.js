const notFound = (req, res, next) => {
    res.status(404)
    const err = new Error(`Route not found: ${req.originalUrl}`)
    next(err)
}

const errHandlerMiddleware = (err, req, res, next) => {
    console.error("SERVER ERROR:", err)

    const statusCode = res.statusCode !== 200 ? res.statusCode : 500

    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? undefined : err.stack
    })
}

export { errHandlerMiddleware, notFound }