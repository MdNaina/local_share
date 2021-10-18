const express = require('express')
const router = express.Router();

const { uploadFile, getAllFiles, deleteFile } = require('../controller')

router.post('/uploadFile', uploadFile)

router.get('/getfiles', getAllFiles);

router.delete('/delete/:id', deleteFile);

module.exports = router;
