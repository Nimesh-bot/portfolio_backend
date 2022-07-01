const verify = require('jsonwebtoken/verify')
const { accessToken } = require('../services/generateToken')
const { verifyAccess } = require('../services/verifyToken')

exports.authUser = async(req, res, next) => {
    var accessToken = req.header("Authorization")

    try{
        if(!accessToken){
            res.status(401).json({
                message: "No token provided"
            })
        }
        if(accessToken.startsWith("Bearer ")){
            accessToken = accessToken.split(" ")[1]
        }

        var verify = await verifyAccess(accessToken)
        
        if(verify.Error === "jwt expired"){
            return res.status(401).json({ "unauthenticated": "Token expired" })
        }
        if(verify.Error){
            return res.status(401).json({ "unauthenticated": "Invalid Token" })
        }

        req.user = verify.aud
        next()
    }
    catch(err) {
        res.status(401).json({
            message: 'UNAUTHORIZED'
        })
    }
}