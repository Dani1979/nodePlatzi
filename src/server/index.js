import express from 'express'
import modules from 'src/server/api'
import mongoose from 'mongoose'
const app = express()

mongoose.connect('mongodb://localhost/tvify')

// Nos aseguramos de servir todos los ficheros estaticos(html, css etc) del directorio public.
app.use(express.static('public'))

// con esto le decimos que monte los endpoints del router sobre el recurso /modules
app.use('/api',modules)

app.listen(3000,()=>{
  console.log("servidor iniciado en el puerto 3000 con Express")
})
