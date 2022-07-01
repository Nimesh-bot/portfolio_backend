const jwt = require('jsonwebtoken');

const accessSecret = process.env.ACCESS_SECRET;
const refreshSecret = process.env.REFRESH_SECRET;
const standardSecret = process.env.OTHER_SECRET;

const verifyAccess = async(token) => {
    const decrypt = jwt.verify(token, accessSecret, (err, decode) => {
        if(err) {
            return { "Error": err.message }
        }
        return decode
    })
    return decrypt
}

const verifyRefresh = async(token) => {
    const decrypt = jwt.verify(token, refreshSecret, (err, decode) => {
        if(err) {
            return { "Error": err.message }
        }
        return decode
    })
    return decrypt
}

const verifyOther = async(token) => {
    const decrypt = jwt.verify(token, standardSecret, (err, decode) => {
        if(err) {
            return { "Error": err.message }
        }
        return decode
    })
    return decrypt
}

module.exports = { verifyAccess, verifyRefresh, verifyOther }