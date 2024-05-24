const express = require('express');
const calculatorController = require('../controllers/calculatorController')
const router = express.Router();

// router.get('/add', (req, res) => {
//     console.log(req.query);
//     res.send(req.query);
//     //calculatorController.addNumbers(req,res)
//     })
// module.exports = router;
    // functional add route performing addition on request parameters
router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2;
    console.log(sum);
    res.status(200);
    res.json({result:sum});
})

router.get('/subtract', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let difference = number1 - number2;
    console.log(difference);
    res.status(200);
    res.json({result:difference});
})

router.get('/multiply', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let product = number1 * number2;
    console.log(product);
    res.status(200);
    res.json({result:product});
})

router.get('/divide', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let quotient = number1 / number2;
    console.log(quotient);
    res.status(200);
    res.json({result:quotient});
})

 module.exports = router;