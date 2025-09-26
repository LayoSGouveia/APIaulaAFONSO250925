const express = require ('express');
const cors = require ('cors');
const mysql = require ('mysql2/promise')

const app = express()
app.use(cors())
app.use(express.json())

const dbConfig = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'aula2509'
}

let pool;

(
    async ()=>{
        pool = await mysql.createPool(dbConfig)
    }
)()

app.get('/clientes', async(req, res)=>{
    try{
        const [rows] = await pool.query('SELECT nome FROM clientes');
        res.json(rows)
    }
    catch(e){
        console.log("Erro", e)
    }
})


app.listen(3003, ()=>{
    console.log("O pai tá ON")
})/*app.get('/api/:carro', (req, res) => {
    const carro = req.params.carro
    res.send(`Seu carro é ${carro}`)
})¨*/

//app.use(express.static('public'))
