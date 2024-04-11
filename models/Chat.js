const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new mongoose.Schema({
    user: { type: Schema.ObjectId, ref: 'User' },
    id: { type: String, unique: true }, // ID of chat user gives
    messages: [{
        message: String,
        type: String
    }], // 3 types of notifications: 'like', 'read', 'reply'
}, { timestamps: true });

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;