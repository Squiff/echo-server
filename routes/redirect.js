const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { url } = req.query;

    res.redirect(url);
});

module.exports = router;
