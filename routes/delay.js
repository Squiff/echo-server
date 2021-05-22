const express = require('express');
const router = express.Router();

const rawParser = express.raw({ type: () => true });

function validateDelay(req, res, next) {
    const { delay } = req.params;
    const delayInt = parseInt(delay);

    if (isNaN(delay)) {
        res.status(400).json({ success: false, message: 'Delay is not a number' });

        return;
    }

    if (delayInt < 0 || delayInt > 5000) {
        res.status(400).json({ success: false, message: 'Delay Should be between 0 and 5000' });

        return;
    }

    next();
}

// return body after specified delay
router.get('/:delay', validateDelay, (req, res) => {
    let { delay } = req.params;

    setTimeout(() => {
        res.json({ success: true, message: `response sent after ${delay}ms` });
    }, delay);
});

router.post('/:delay', [validateDelay], (req, res) => {
    let { delay } = req.params;
    const contentType = req.get('content-type');

    setTimeout(() => {
        if (contentType) res.setHeader('Content-Type', contentType);
        req.pipe(res);
    }, delay);
});

module.exports = router;
