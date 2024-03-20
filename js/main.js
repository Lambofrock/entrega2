let tipo = prompt("ingresar tipo de ropa : chaqueta, poleron y polera")
let genero = prompt("genero de prenda: hombre, mujer, niño unisex")
const busqueda = {
    tipo: tipo,
    genero:genero,
}


function enVenta(stock) {
    stock.forEach(ropa=> { console.log(ropa.tipo +" - "+ ropa.color+" - manga:"+ ropa.manga+" - de "+ ropa.Material+ " - "+ ropa.valor+" - " + ropa.genero)
    });
}

function filtrarTipo(ropas){
    if (tipo){
        return ropas.tipo === tipo
    }
    return ropas
}
function filtrarGenero(ropas){
    if (genero){
        return ropas.genero === genero
    }
    return ropas
}
function filtrarRopa(){
    const resultado = ropas.filter (filtrarTipo). filter (filtrarGenero);
    if (resultado.length>0){
        enVenta(resultado)
    }else{
        console.error('sin resultados')
    }
}

filtrarRopa()