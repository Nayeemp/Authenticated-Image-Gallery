const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    uploader: { type: String, required: true },
    image: { type: String, required: true },
});

module.exports = mongoose.model('Image', imageSchema);
