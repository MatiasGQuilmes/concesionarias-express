const fs = require('fs');
const { runInNewContext } = require('vm');
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));
 
module.exports = {
    sucursal : (req, res)=>{
            concesionarias.forEach(element => {
            res.write(`Sucursal: ${element.sucursal},\nDireccion: ${element.direccion},\nTelefono: ${element.telefono}\n\n`); 
            });
            res.end(); 
    },
}