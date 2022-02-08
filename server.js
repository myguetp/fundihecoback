const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const rutas = require('./mysql')
const cors = require('cors')

const app = express()
app.set('port', process.env.PORT || 9000 )
const dboptions={
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'apirestdb'
}

app.use(myconn(mysql, dboptions, 'single'))
app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.send("bienvenido a la api")
})
app.use('/api', rutas)


app.listen(app.get('port'), ()=>{
    console.log("servidor corriendo puerto", app.get('port'))
})