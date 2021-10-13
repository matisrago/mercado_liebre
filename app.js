const express = require('express')
const app = express()
const path = require('path')

app.get('/',(req,res)=>{
    const archivoPrincipal = path.join(__dirname,'/views/home.html')
    res.sendFile(archivoPrincipal)
})

app.get('/registro',(req,res)=>{
    const archivoPrincipal = path.join(__dirname,'/views/register.html')
    res.sendFile(archivoPrincipal)
})

app.get('/login',(req,res)=>{
    const archivoPrincipal = path.join(__dirname,'/views/login.html')
    res.sendFile(archivoPrincipal)
})

app.use(express.static('public'));
app.use(express.urlencoded());

app.listen(process.env.PORT || 3030,()=>{
    console.log('Funciono el servidor')
})

app.post('/resultadoRegistro',(req,res)=>{
    req.body
   res.redirect('/')
})

app.post('/resultadoLogin',(req,res)=>{
    req.body
   res.redirect('/')
})