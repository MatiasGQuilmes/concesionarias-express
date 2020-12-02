const fs = require('fs');
const { runInNewContext } = require('vm');
const concesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));
 

module.exports = {
    home : (req, res)=> {
        res.write(`                                                                                                             Bienvenidos a nuestro sitio\n\nEstas son nuestras sucursales:\n`)
        concesionarias.forEach(element => {
             res.write( `                              -${element.sucursal}\n`);        
        });
     /*    res.write(`\nNuestro stock de vehiculos en este momento es de: ${autos}`)
        */
      /*   let autos = 1
        for (let i = 0; i < concesionarias.length; i++) {
            return autos = autos + concesionarias[i].autos.length * concesionarias.length
            } */
       
        res.end()
    },
    
}  