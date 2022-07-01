const jwt = require('jsonwebtoken')

const accessSecret = process.env.ACCESS_SECRET
const refreshSecret = process.env.REFRESH_SECRET
const standardSecret = process.env.OTHER_SECRET

const access_token = (_id, time='60m') => {
    const payload = ""
    const token = jwt.sign(payload, accessSecret, {expiresIn: time, issuer: 'SaqYeah', audience: String(_id)})
    return token
}

const refresh_token = (_id, time='7d') => {
    const payload = ""
    const token = jwt.sign(payload, refreshSecret, {expiresIn: time, issuer: 'SaqYeah', audience: String(_id)})
    return token
}

const standard_token = (_id, time='10m') => {
    const payload = ""
    const token = jwt.sign(payload, standardSecret, {expiresIn: time, issuer: 'SaqYeah', audience: String(_id)})
    return token
}

module.exports = { standard_token, access_token, refresh_token }