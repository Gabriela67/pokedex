function Pokemon (nombre , ataque,tipo ,debilidades) {
    this.nombre = nombre;
    this.ataque = ataque;
    this.tipo = tipo;
    this.debilidades = debilidades;
}
function TipoFuego (nombre, ataque ,tipo, debilidades) {
    Pokemon.call(this ,nombre,ataque,tipo ,debilidades);


    
}
function TipoAgua(nombre , ataque,tipo ,debilidades) {
    Pokemon.call(this ,nombre,ataque,tipo,debilidades);

    
    
}
function TipoHielo(nombre , ataque,tipo,debilidades)
{
    Pokemon.call(this ,nombre,ataque,tipo,debilidades);
    
}
function TipoAire(nombre , ataque,tipo,debilidades)
{
    Pokemon.call(this ,nombre,ataque,tipo,debilidades);
    
}
TipoFuego.prototype = Object.create(Pokemon.prototype);
TipoAgua.prototype = Object.create(Pokemon.prototype);
TipoAire.prototype = Object.create(Pokemon.prototype);
TipoHielo.prototype = Object.create(Pokemon.prototype);



TipoFuego.prototype.costructor = TipoFuego;
TipoAgua.prototype.costructor  = TipoAgua;
TipoAire.prototype.costructor = TipoAire;
TipoHielo.prototype.console = TipoHielo;

console.log(TipoFuego.prototype);


const charizard = new TipoFuego("charizard","volar","Tipo fuego","agua");
const truenos = new TipoAgua("truenos","lluvia","tipoAgua","fuego");
const kakuna = new TipoAire("kakuna","golpes","Tipo Aire","FUEGO")
const gloom =   new TipoHielo("GLOOM","veneno","tipo hielo","fuego y tierra");

console.log(charizard)
console.log(truenos)
console.log(kakuna)
console.log(gloom)
