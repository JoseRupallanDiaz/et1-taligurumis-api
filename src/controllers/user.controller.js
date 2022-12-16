import userModel from "../models/user.model.js"
import bcrypt from 'bcrypt'

async function login(req, res) {
    try {
        const user = await userModel.findOne({ username: req.body.username }).exec()
        const isMatch = await bcrypt.compare(req.body.password, user.password)
        if (isMatch) {
            return res.status(200).send(user)
        } else {
            return res.status(401).send("Invalid password")
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}

async function register(req, res) {
    const encryptedPassword = bcrypt.hashSync(req.body.password, 10)
    userModel.create({
        username: req.body.username,
        password: encryptedPassword,
        phone: req.body.phone,
        role: "User"
    }).then(() => {
        console.log("user created")
        return res.status(200).send("User registered")
    }).catch((mongoError) => {
        return res.status(500).send(mongoError)
    })
}

async function createDefaultAdmin() {
    userModel.create({
        username: "admin",
        password: bcrypt.hashSync("admin", 10),
        phone: 56920167870,
        role: "Admin"
    }).then(() => {
        console.log("default admin created")
        return true
    }).catch(() => {
        console.log("default admin already exists")
        return false
    })
}

async function getUser(username, password) {
    try {
        const user = await userModel.findOne({ username: username }).exec()
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            return user
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
        return false
    }
}

export { login, register, createDefaultAdmin ,getUser }