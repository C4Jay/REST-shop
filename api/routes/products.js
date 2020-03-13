const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "handlin GET reqs to /products"
    })
})


router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "handlin POST reqs to /products"
    })
})


router.get('/:id', (req, res, next) => {
    const productid = req.params.id;
    if(productid === '9') {
        res.status(200).json({
            message : 'Hey You',
            id: productid
        })
    } else {
        res.status(200).json({
            message : 'Hey'
        })
    }
} );


router.patch('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'U done'
    })
});


router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: "deleted product"
    })
});

module.exports = router