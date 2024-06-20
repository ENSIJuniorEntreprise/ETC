const express = require("express");
const refreshTokenController = require("../Controllers/refreshTokenController")

const router = express.Router();

router.get('/', refreshTokenController.refreshAccessToken);
router.put('/:id', refreshTokenController.updateRefreshToken);

module.exports = router;