const express=require('express')
const bodyParser=require('body-parser')

const route=require('./route/pages')
const path=require('path')
const app=express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.use('/',route)
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


    app.listen(4200,()=>{
        console.log("server is running")
    })

