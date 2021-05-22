const express = require('express');
const router = express.Router();

router.all('/:statuscode', (req, res) => {
    const { statuscode } = req.params;
    res.status(statuscode).end();
});

router.use('/:statuscode', (err, req, res, next) => {
    if (err.code === 'ERR_HTTP_INVALID_STATUS_CODE') {
        return res.status(400).json({ success: false, message: 'invalid status code' });
    }

    next(err);
});

module.exports = router;
