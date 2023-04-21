const express = require("express");
const router = express.Router();
const MessageCtrl = require("../controllers/file.controller");

router.get("/data", MessageCtrl.getFilesContent);
router.get("/list", MessageCtrl.getFileList);
router.get("/data/:name", MessageCtrl.getFilesContentByName);

module.exports = router;
