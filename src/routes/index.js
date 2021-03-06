const express = require('express');
const router = express.Router();
const Task = require('../models/task')
router.get('/',async (req,res)=>{
    const tasks = await Task.find();
    console.log(tasks)
    res.render('index',{
        tasks //tasks:tasks
    });
});
router.post('/add', async (req,res)=>{
    const task = new Task(req.body)
    await task.save();
    res.redirect('/');
});
router.get('/convertido/:id',async (req,res)=>{
    const {id}= req.params;
    const task = await Task.findById({_id:id});
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});
router.get('/editar/:id',async (req,res)=>{
    const {id}= req.params;
    const task = await Task.findById({_id:id});
    res.render('edit',{
        task
    });
});
router.get('/delete/:id',async (req,res)=>{
    const {id}= req.params;
    await Task.remove({_id:id});
    res.redirect('/');
});

module.exports = router;
