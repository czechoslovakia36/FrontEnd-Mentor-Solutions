const express= require('express')
const app= express();

const path= require('path')


console.log(path.join(__dirname,"public"))

app.use(express.static(path.join(__dirname,"public")))


app.use('/pages',express.static(__dirname+'/test'))

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'public/index.html'))
})


app.listen(3000,()=> console.log("App is running at port 3000"))