const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
    
  });
}

function authenticateUser(req,res,next){
    authenticateJWT(req,res,next,()=>{
        if (req.user.id === req.params.id || req.user.role === 'admin') {
            next();
          } else {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
          }
    })
}

function authenticateAdmin(req,res,next){
    authenticateJWT(req,res,next,()=>{
        if (req.user.role === 'admin') {
            next();
          } else {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
          }
    })
}

module.exports = {
    authenticateJWT,
    authenticateUser,
    authenticateAdmin
}