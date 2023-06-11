/* eslint-disable consistent-return */
/* eslint-disable max-len */
const express = require('express');
const checkLogin = require('../middlewares/checkLogin');
const fileUploader = require('../utils/fileUploader');

const { upload, all, single } = require('../controllers/imageGalleryController');

const Route = express.Router();
Route.post('/upload', checkLogin, fileUploader.single('image'), upload);
Route.get('/all', checkLogin, all);
Route.delete('/single/:image', checkLogin, single);

module.exports = Route;
