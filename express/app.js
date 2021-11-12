const express = require('express');

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})

server.on('error',(error)=>console.log('Error en el servidor: '+error))

app.get('/', (req,res)=>{
    res.send('<h1 style="color: blue">Bienvenido al servidor express</h1>')
})