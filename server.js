const express=require("express")
const app=express()
const routes=require('./routes/routes')




const hostname='127.0.0.1'
const port=80


app.set("view engine", 'ejs')
app.use('/static',express.static("static"))
app.use(express.urlencoded({extended:false}))


// pages got from roures folder
app.use("/",routes)
// app.use("/blogs",routes)
app.use("/contact",routes)
app.use("/About",routes);

//pages of index and blogs from views
app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.get('/blogs',(req,res)=>{
    res.render('blogs.ejs')
});



//Listen to this port 
app.listen(port,hostname,()=>{
    console.log(`App is running at port ${port}`)
})