
const logs =(req,res,next)=>{
    const url = req.url
    const log = new Date().getDate()
    //console.log(log);
    next();
}