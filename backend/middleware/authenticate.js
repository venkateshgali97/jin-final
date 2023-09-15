const authenticateUser = (req,res,next) =>{
  console.log(req.headers['access-token'])
  next()

}


module.exports = {
    authenticateUser
}