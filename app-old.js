const http = require('http');

// crear servidor. recibe un callback
http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'jose',
        edad: '27',
        url: req.url
    };

    res.write(JSON.stringify(salida));
    //res.write('Hola mundo');
    res.end();
})

// Configurar el puerto

.listen(8080);

console.log('Escuchando el puerto 8080');