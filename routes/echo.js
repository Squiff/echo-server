const express = require('express');
const router = express.Router();

// check that the content types is valid
router.post('/body', (req, res) => {
    const contentType = req.get('content-type');
    if (contentType) res.setHeader('Content-Type', contentType);

    req.pipe(res);
});

router.get('/header', (req, res) => {
    res.json(req.headers);
});

router.get('/query', (req, res) => {
    res.json(req.query);
});

module.exports = router;
