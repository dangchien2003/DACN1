function checkURL(path, handler) {
    return (req,res,next) =>{
        if(req.originalUrl === path)
            handler(req,res);
        else next();
    }
  }

module.exports = checkURL;