const express = require('express');
const fs = require('fs')
const app = express();

app.listen(3030, () => console.log('el servidor anda joya'));

const concesionarias = JSON.parse(fs.readFileSync(__dirname + '/data/concesionarias.json', 'utf-8'));

//RUTAS
const rutaMain = require('./routes/main');
const rutaSucursales = require('./routes/sucursales');
/* const rutaAutos = require('./routes/autos');
const rutaMarcas = require('./routes/marcas');
 */

app.use('/', rutaMain);
app.use('/sucursales', rutaSucursales);
/* app.use('/autos', rutaAutos);
app.use('/marcas', rutaMarcas); */