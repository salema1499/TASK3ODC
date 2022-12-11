const express=require("express")

const path=require("path")
const hbs=require("hbs")
const app=express()
//setstatic ex..>> images..html..css
app.use(express.static(path.join(__dirname, "../clientside/public")))
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "../clientside/views"))
hbs.registerPartials(path.join(__dirname, "../clientside/layout"))
app.use(express.urlencoded({extended:true}))
const routTask=require("./router/tasks.router")
app.use(routTask)
//if enter any thing erro ..waildcard
app.all('*', (req,res)=> res.render('err404', {
    pageTitle:"Page Not Found", 
    err:"invalid url please try "
}))
module.exports=app