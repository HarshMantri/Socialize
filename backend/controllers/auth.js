const bcrypt = require("bcryptjs");

const User = require("../models/User");

exports.register = async (req, res, next) => {
    const { username, email, password, firstName, lastName } = req.body;

    try {
        const user = await User.create({
            username,
            email,
            password,
            firstName,
            lastName,
        });
        return res.status(200).json({
            success: true,
            jwt: user.createJWT(),
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error,
        });
    }
};

exports.login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username }).select("+password");
        if (!user) {
            return res.status(400).json({
                success: false,
                error: "unauthorized",
            });
        }
        const isValid = await user.validatePassword(password);
        if (!isValid) {
            return res.status(400).json({
                success: false,
                error: "unauthorized",
            });
        }
        return res.status(200).json({
            success: true,
            jwt: user.createJWT(),
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error,
        });
    }
};
