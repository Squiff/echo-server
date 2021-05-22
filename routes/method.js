const express = require('express');
const router = express.Router();

const successMessage = { success: true };

router.get('/get', (req, res) => {
    res.status(200).json(successMessage);
});

router.post('/post', (req, res) => {
    res.status(200).json(successMessage);
});

router.delete('/delete', (req, res) => {
    res.status(200).json(successMessage);
});

router.put('/put', (req, res) => {
    res.status(200).json(successMessage);
});

router.patch('/patch', (req, res) => {
    res.status(200).json(successMessage);
});

router.all('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: `Invalid path ${req.baseUrl}${req.path} for method ${req.method}`,
    });
});

module.exports = router;
