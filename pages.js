const express=require("express")
const router=express.Router();
router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/education',(req,res)=>{
    res.render('education')
})
router.get('/experince',(req,res)=>{
    res.render('experince')
})

router.get('/project',(req,res)=>{
    res.render('project')
})
router.get('/contact',(req,res)=>{
    res.render('contact')
})

module.exports=router;
