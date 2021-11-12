const http = require ('http');

const server = http.createServer((peticion,respuesta)=>{
    let hora = new Date().getHours();
    if(hora>=6&&hora<=12) respuesta.end('Buenos dias');
    if(hora>=13&&hora<=19) respuesta.end('Buenos tardes');
    if(hora>=20||hora<=5) respuesta.end('Buenos noches');
})

const connectedServer = server.listen(8080, ()=>{
    console.log('Servidor escuchando en el puerto: 8080');
})

