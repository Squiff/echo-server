const express = require('express');
const router = express.Router();

const jsonParser = express.json();
const cookieParser = require('cookie-parser');

router.use(jsonParser);
router.use(cookieParser());

router.get('/', (req, res) => {
    res.json(req.cookies);
});

router.post('/', (req, res) => {
    for (const k in req.body) {
        const stringValue = req.body[k].toString();

        // Set Cookie
        try {
            res.cookie(k, stringValue);
        } catch (TypeError) {
            res.status(400).json({ success: false, message: 'Invalid Cookie' });
            return;
        }
    }

    res.json({ success: true });
});

router.delete('/', (req, res) => {
    const cookieName = req.body['cookie'];

    // Invalid JSON Shape
    if (typeof cookieName !== 'string') {
        res.status(400).json({
            success: false,
            message: `Request body must be of shape {'cookie':string}`,
        });

        return;
    }

    // remove cookie
    try {
        res.clearCookie(cookieName);
    } catch (TypeError) {
        res.status(400).json({ success: false, message: 'Invalid Cookie' });
        return;
    }

    // Success Response
    res.json({ success: true });
});

module.exports = router;
