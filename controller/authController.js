const bcrypt = require('bcrypt');
const { access_token, refresh_token, standard_token } = require('../services/generateToken');
const { verifyRefresh, verifyOther } = require('../services/verifyToken');
const userModel = require('../model/userModel');

const registerUser = async (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    try {
        if(newUser.password.length < 6 ) {
            throw Error ("Password must be at least 6 characters long")
        }
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(newUser.password, salt);

        newUser.password = hashed;

        const newUserInfo = new userModel(newUser);
        await newUserInfo.save()

        res.status(200).json({
            message: "User registered successfully"
        })
    }
    catch(err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await userModel.findOne({email});
        if(!user) {
            res.status(404).json({
                message: "User not found"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            throw Error ("Password is incorrect")
        }

        const access_token = await access_token(user._id)

        res.status(200).json({
            message: "User logged in successfully",
            access_token
        })
    }
    catch(err) {
        res.status(401).json({
            message: err.message
        })

    }
}

module.exports = { registerUser, loginUser } 