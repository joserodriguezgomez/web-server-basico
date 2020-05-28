const express = require('express')
const app = express()
const hbs = require('hbs');

const port = process.env.PORT || 3000;


// creando middleware

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    context = {
        nombre: 'José',
        anio: new Date().getFullYear()
    }


    res.render('home', context);
});



app.get('/about', (req, res) => {

    res.render('about');
});



app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)
});