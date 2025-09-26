// Importa o express
const servidorAula = require('express')

const app = servidorAula()

app.get('/',(req, res)=>{
    res.send('Olá mundo')
})

app.listen(3000, ()=>{
    console.log('Servidor ON')
})
