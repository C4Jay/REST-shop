const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "orders taken"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'order was created'
    });
});

router.get('/:id', (req, res, next) => {
    const checkoutid = req.params.id
    res.status(200).json({
        message: "orders taken",
        id: checkoutid
    });
});

router.delete('/:id', (req, res, next) => {
    const checkoutid = req.params.id
    res.status(200).json({
        message: "orders deleted",
        id: checkoutid
    });
});

module.exports = router;