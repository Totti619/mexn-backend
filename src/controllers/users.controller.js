const controller = {}

const User = require('../models/User')

controller.getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

controller.getUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.json(user)
}

controller.createUser = async (req, res) => {
    const { username } = req.body
    const newUser = new User({ username })
    await newUser.save()
    res.json({ message: "User created!" })
}

controller.updateUser = async (req, res) => {
    const { username } = req.body
    const user = await User.findByIdAndUpdate(req.params.id, { username })
    res.json({ message: "User updated!" })
}

controller.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.json({ message: "User deleted!" })
}

module.exports = controller