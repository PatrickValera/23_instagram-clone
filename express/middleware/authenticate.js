const jwt = require('jsonwebtoken')
const User = require('../models/userModel.js')

const authenticate = async (req, res, next) => {
  let token
  let authorization = req.headers.authorization || 'noAuth'
  if (authorization & authorization.startsWith('Bearer')) {
    token = authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decoded.id).select('-password')
  }
  else{
      req.user={
          isLoggedIn:false
      }
  }
  console.log(req.user)

}
module.exports = authenticate
