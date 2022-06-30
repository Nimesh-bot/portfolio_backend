const userModel = require('../models/userModel');

const registerUser = (req, res) => {
    var newUser = req.body;

    try {
        if(newUser.password.length < 6 ) {
            throw Error ("Password must be at least 6 characters long")
        }
        const salt = await bcrpt.genSalt(10);
        const hashed = await bcrypt.hash(newUser.password, salt);

        newUser.password = hashed;

        const newUserInfo = new userModel(newUser);
        newUserInfo.save()

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

const loginUser = (req, res) => {
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
        // const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({
            message: "User logged in successfully",
            // token
        })
    }
    catch(err) {
        res.status(401).json({
            message: err.message
        })

    }
}

module.exports = { registerUser, loginUser } 