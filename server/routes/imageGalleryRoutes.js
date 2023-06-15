/* eslint-disable consistent-return */
/* eslint-disable max-len */
const express = require('express');
const checkLogin = require('../middlewares/checkLogin');
const fileUploader = require('../utils/fileUploader');

const { create, read, remove } = require('../controllers/imageGalleryController');

const Route = express.Router();
Route.post('/images', checkLogin, fileUploader.single('image'), create);
Route.get('/images', checkLogin, read);
Route.delete('/images/:image', checkLogin, remove);

module.exports = Route;
