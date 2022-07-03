const express =require("express")
const app=express()
const router=express.Router()
const fs=require("fs");



router.get('/contact',(req,res)=>{
    res.render("../views/pages/contact.ejs")
})


router.get('/about',(req,res)=>{
    res.render("../views/pages/about.ejs")
})


router.get('/love',(req,res)=>{
    res.send("he is a good boy")
})


module.exports=router