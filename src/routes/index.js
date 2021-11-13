const express = require('express');
const router = express.Router();
const Task = require('../models/task')
router.get('/',(req,res)=>{
    res.render('index');
});
router.post('/add',(req,res)=>{
    console.log(new Task(req.body))
    res.send("recived")
});
module.exports = router;
