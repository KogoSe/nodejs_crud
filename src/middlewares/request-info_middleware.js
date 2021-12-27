export default () => (req,res,next) => {
    console.info(`[${new Date()}]: { URI : ${req.originalUrl}, Method: ${req.method} }`)
    next()
}