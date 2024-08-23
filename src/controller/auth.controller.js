const authModels = require("../models/auth.models")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const postNewAdmin = async (req, res) => {
    const { username, password,nama_admin } = req.body
    console.log(req.body);
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const token = jwt.sign({ username,nama_admin, role: 'admin' }, process.env.SECRET_KEY)
        await authModels.createAdmin(username, hashedPassword, token,nama_admin);
        res.status(201).json({
            status: "Success",
            message: "Admin has been successfuly created",
            data: username,nama_admin, token

        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "Error",
            message: error.message
        })
    }
}

const postLoginAdmin = async (req, res) => {
    const { username, password } = req.body
    try {
        const result = await authModels.loginAdmin(username);
        if (result.length === 0) {
            return res.status(400).json({
                status: "Invalid",
                message: "Username atau Password salah"
            })
        }
        const admin = result[0]
        const match = await bcrypt.compare(password, admin.password)

        if (!match) {
            return res.status(400).json({
                status: "invalid",
                message: "Password Salah"
            })

        }
        const token = admin.token
        return res.status(200).json({
            status: "Success",
            message: "Login Success",
            token
        })

    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message
        })

    }
}


module.exports = {
    postNewAdmin,
    postLoginAdmin
}