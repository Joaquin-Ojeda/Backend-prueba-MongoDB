const express = require('express');
const cors = require('cors');
const movieRouter = require('./routers/movieRouter');
const conectarDB = require('./db/db');

const PORT = process.env.PORT || 3000;
const app = express();

//conexion a la DB
conectarDB();

//Middleware
app.use(cors());


app.use('/api/movies', movieRouter);

app.get('/', (req,res)=>{
    res.send('Servidor CRUD Movies - 200 ok!');
})

app.listen(PORT, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
})