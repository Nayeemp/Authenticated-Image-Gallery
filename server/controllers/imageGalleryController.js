/* eslint-disable max-len */
const fs = require('fs');
const Image = require('../models/imageModel');
const decodeToken = require('../helpers/imageGalleryHelpers');

const UPLOADS_FOLDER = './public/images/';

const upload = async (req, res) => {
    try {
        // console.log('req.file = ', req.file);
        // console.log('req.body = ', req.body);
        const { filename: image } = req.file;
        const { title, uploader } = req.body;

        await Image.create({ title, uploader, image });

        res.status(200).json({ message: 'Data Inserted Successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to Insert' });
        console.log(err.message);
    }
};

const all = async (req, res) => {
    try {
        const { email } = decodeToken(req.headers);
        const images = await Image.find({ uploader: email });
        res.send(images);
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err.message);
    }
};

const single = async (req, res) => {
    try {
        const { image } = req.params;
        // console.log('req.params= ', req.params);
        // console.log('image = ', image);
        const results = await Image.deleteOne({ image });
        fs.unlinkSync(UPLOADS_FOLDER + image); // delete file from server using fs module(node js core module)
        res.send({ data: results });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err.message);
    }
};

module.exports = { upload, all, single };
