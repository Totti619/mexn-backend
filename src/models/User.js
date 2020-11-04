const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('User', schema)