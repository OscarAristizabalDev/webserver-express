const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

//permite obtener un puerto en un servidor
//no funciona en localhost, en ese caso se indica el 8080
const port = process.env.PORT || 8080;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'oscar orlando aristizabal jaimes'
    });
})

app.get('/about', (req, res) => {

    res.render('about')

})

/* app.get('/', (req, res) => {

    let salida = {
        nombre: 'Oscar',
        edad: '32',
        url: req.url
    }

    res.send(salida);
}) */

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port } `);
});